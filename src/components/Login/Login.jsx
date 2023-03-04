/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ContextTheme } from '../Others/Context';
import { store } from '../../store/store';
import * as S from './LoginStyles';
import * as GS from '../../GlobalStyle';
import Logo from './img/logo.png';
import {
  loginDataSelector,
  loginDataLoadingSelector,
  loginDataErrorSelector,
  loginDataErrorMSGSelector,
  AccessTokenSelector,
  RefreshTokenSelector,
} from '../../store/selectors/selectors';
import {
  fetchLogin,
  fetchSignUp,
  fetchGetToken,
  fetchRefreshToken,
} from '../../store/actions/thunks/thunks';
import { FetchUserLogIn } from '../../store/actions/creators/creators';

const InputFields = [
  {
    name: 'login',
    placeholder: 'Логин(email)',
    key: '1',
    type: 'email',
  },
  {
    name: 'Password',
    placeholder: 'Пароль',
    key: '2',
    type: 'password',
  },
  {
    name: 'ReturnPassword',
    placeholder: 'Повторите пароль',
    key: '3',
    type: 'password',
  },
  {
    name: 'userName',
    placeholder: 'Имя пользователя',
    key: '4',
    type: 'text',
  },
];
function Login() {
  const { theme, setTheme } = useContext(ContextTheme);

  return (
    <GS.Wrapper theme={theme}>
      <GS.Container theme={theme}>
        <GS.Main>
          <S.CenterBlock>
            <S.LoginMainBlock>
              <S.LogoImg src={Logo} />
              <LoginBlock />
            </S.LoginMainBlock>
          </S.CenterBlock>
        </GS.Main>
      </GS.Container>
    </GS.Wrapper>
  );
}

export default Login;

function LoginBlock() {
  const [signUp, setSignUp] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginData = useSelector(loginDataSelector);
  const isLoading = useSelector(loginDataLoadingSelector);
  const error = useSelector(loginDataErrorSelector);
  const errorMessage = useSelector(loginDataErrorMSGSelector);
  const AccessToken = useSelector(AccessTokenSelector);
  const RefreshToken = useSelector(RefreshTokenSelector);

  const [userName, setUserName] = useState('');
  const [loginMail, setLoginMail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [idRefreshTokenInterval, setIdRefreshTokenInterval] = useState(null);
  const loginStates = {
    states: {
      userName,
      loginMail,
      password,
      repeatPassword,
    },
    funcStates: {
      setUserName,
      setLoginMail,
      setPassword,
      setRepeatPassword,
    },
  };
  useEffect(() => {
    if (idRefreshTokenInterval) {
      clearInterval(idRefreshTokenInterval);
    }
  }, [idRefreshTokenInterval]);
  useEffect(() => {
    const getToken = loginData?.id > 0;
    if (getToken && AccessToken === null) {
      const TokenAccessDataObj = {
        email: loginStates.states.loginMail,
        password: loginStates.states.password,
      };
      dispatch(fetchGetToken(TokenAccessDataObj));
    } else if (AccessToken !== null && RefreshToken !== null) {
      const id = setInterval(() => {
        dispatch(fetchRefreshToken());
      }, 40000);
      setIdRefreshTokenInterval(id);
      localStorage.setItem(
        'MySpotyfyLoginData',
        JSON.stringify({
          id: loginData.id,
          username: loginData.username,
          refreshToken: RefreshToken,
        })
      );
      dispatch(FetchUserLogIn(true));
      navigate('/main');
    }
  }, [loginData, AccessToken]);
  return (
    <S.LoginInputsBlock>
      <LoginMenu
        isLoading={isLoading}
        list={InputFields}
        count={signUp ? 4 : 2}
        loginStates={loginStates}
      />
      {Object.keys(errorMessage).length > 0 && (
        <S.ErrorArea>
          <ShowErrors errorMessage={errorMessage} />
        </S.ErrorArea>
      )}
      {!signUp && (
        <ButtonLogIn
          isLoading={isLoading}
          loginStates={loginStates.states}
          dispatch={dispatch}
        />
      )}
      <ButtonGetSignUp
        signUp={signUp}
        setSignUp={setSignUp}
        dispatch={dispatch}
        loginStates={loginStates.states}
      />
    </S.LoginInputsBlock>
  );
}
function ShowErrors({ errorMessage }) {
  // let content = [];
  let keys = Object.keys(errorMessage);
  keys = keys.map((errorMessageKey, key) => (
    // eslint-disable-next-line react/no-array-index-key
    <S.ErrorSpan key={key}>{errorMessage[errorMessageKey]}</S.ErrorSpan>
  ));
  return keys;
}
const LoginMenu = ({ list, count, loginStates, isLoading }) => {
  const { states } = loginStates;
  const { funcStates } = loginStates;

  const content = [];
  function ChangeInput(e) {
    const { target } = e;
    switch (target.name) {
      case 'userName':
        funcStates.setUserName(target.value);
        break;
      case 'login':
        funcStates.setLoginMail(target.value);
        break;
      case 'Password':
        funcStates.setPassword(target.value);
        break;
      case 'ReturnPassword':
        funcStates.setRepeatPassword(target.value);
        break;
      default:
        throw new Error('Отсутствует поле в форме Login');
    }
  }
  function getValue(key) {
    switch (key) {
      case '1':
        return states.loginMail;
      case '2':
        return states.password;
      case '3':
        return states.repeatPassword;
      case '4':
        return states.userName;
      default:
        throw new Error('Отсутствует state в форме Login');
    }
  }
  list.forEach((inputElem, index) => {
    if (index < count) {
      content.push(
        <S.InputField
          type={inputElem.type}
          disabled={isLoading}
          value={getValue(inputElem.key)}
          name={inputElem.name}
          placeholder={inputElem.placeholder}
          key={inputElem.key}
          onChange={(e) => ChangeInput(e)}
        />
      );
    }
  });
  return content;
};

function ButtonLogIn({ dispatch, loginStates, isLoading }) {
  // eslint-disable-next-line consistent-return
  function handelClickBtnLogin() {
    const loginDataObj = {
      email: loginStates.loginMail,
      password: loginStates.password,
    };
    dispatch(fetchLogin(loginDataObj));
  }

  return (
    <S.ButtonLogIn disabled={isLoading} onClick={() => handelClickBtnLogin()}>
      Войти
    </S.ButtonLogIn>
  );
}

function ButtonGetSignUp({ signUp, setSignUp, dispatch, loginStates }) {
  const navigate = useNavigate();
  function HandelClickBtnSignUp() {
    const signUpDataObj = {
      username: loginStates.userName,
      email: loginStates.loginMail,
      password: loginStates.password,
    };
    if (!signUp) {
      setSignUp((prev) => !prev);
    } else {
      dispatch(fetchSignUp(signUpDataObj));
    }
    // return navigate('/main', { replace: true });
  }
  return (
    <S.ButtonGetSignUp $signUp={signUp} onClick={() => HandelClickBtnSignUp()}>
      Зарегистрироваться
    </S.ButtonGetSignUp>
  );
}
