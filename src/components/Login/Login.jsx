/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './LoginStyles';
import * as GS from '../../GlobalStyle';
import Logo from './img/logo.png';
// import CenterBlock from '../Others/CentreBlock';
const { useState, useEffect } = React;
const InputFields = [
  { name: 'login', placeholder: 'Логин', key: '1' },
  { name: 'Password', placeholder: 'Пароль', key: '2' },
  { name: 'ReturnPassword', placeholder: 'Повторите пароль', key: '3' },
];
function Login() {
  const [signUp, setSignUp] = useState(0);

  return (
    <GS.Wrapper>
      <GS.Container>
        <GS.Main>
          <S.CenterBlock>
            <S.LoginMainBlock>
              <S.LogoImg src={Logo} />
              <LoginBlock signUp={signUp} setSignUp={setSignUp} />
            </S.LoginMainBlock>
          </S.CenterBlock>
        </GS.Main>
      </GS.Container>
    </GS.Wrapper>
  );
}

export default Login;

function LoginBlock({ signUp, setSignUp }) {
  return (
    <S.LoginInputsBlock>
      <LoginMenu list={InputFields} count={signUp ? 3 : 2} />
      {!signUp && <ButtonLogIn setSignUp={setSignUp} />}
      <ButtonGetSignUp signUp={signUp} />
    </S.LoginInputsBlock>
  );
}
const LoginMenu = ({ list, count }) => {
  const content = [];
  list.forEach((inputElem, index) => {
    if (index < count) {
      content.push(
        <S.InputField
          name={inputElem.name}
          placeholder={inputElem.placeholder}
          key={inputElem.key}
        />
      );
    }
  });
  return content;
};

function ButtonLogIn({ setSignUp }) {
  const navigate = useNavigate();
  // eslint-disable-next-line consistent-return
  function handelClickBtnLogin() {
    const stringLogParams = localStorage.getItem('MySpotyfiLogin');
    const LoginDataStorage = JSON.parse(stringLogParams);
    const login = document.getElementsByName('login')[0].value;
    const password = document.getElementsByName('Password')[0].value;
    // e.target.value
    if (
      LoginDataStorage &&
      LoginDataStorage.login === login &&
      LoginDataStorage.password === password
    ) {
      sessionStorage.setItem('MySpotyfiLogin', stringLogParams);
      return navigate('/main', { replace: true });
    }
    setSignUp(1);
  }

  return (
    <S.ButtonLogIn onClick={() => handelClickBtnLogin()}>Войти</S.ButtonLogIn>
  );
}

function ButtonGetSignUp({ signUp }) {
  const navigate = useNavigate();
  function HandelClickBtnSignUp() {
    // const LoginDataStorage = JSON.parse(localStorage.getItem('MySpotyfiLogin'));
    const login = document.getElementsByName('login')[0].value;
    const password = document.getElementsByName('Password')[0].value;
    // e.target.value
    const MySpotyfiLogin = JSON.stringify({ login, password });
    localStorage.setItem('MySpotyfiLogin', MySpotyfiLogin);
    sessionStorage.setItem('MySpotyfiLogin', MySpotyfiLogin);
    return navigate('/main', { replace: true });
  }
  return (
    <S.ButtonGetSignUp $signUp={signUp} onClick={() => HandelClickBtnSignUp()}>
      Зарегистрироваться
    </S.ButtonGetSignUp>
  );
}
