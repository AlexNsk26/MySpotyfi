/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const CenterBlock = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginMainBlock = styled.div`
  height: 439px;
  width: 366px;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LogoImg = styled.img`
  height: 21px;
  width: 140px;
  background: transparent;
  margin-top: 43px;
`;

export const LoginInputsBlock = styled.div`
  margin-top: 14px;
  display: inherit;
  align-items: inherit;
  flex-direction: inherit;
`;

export const InputField = styled.input`
  margin-top: 20px;
  height: 40px;
  width: 278px;
  border: none;
  border-bottom: 1px solid #d0cece;
  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.003em;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #d0cece;
  }
`;

export const ErrorArea = styled.div`
  margin-top: 10px;
  //height: 40px;
  width: 278px;
`;

export const ErrorSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #f54021;
`;

export const ButtonLogIn = styled.button`
  width: 278px;
  height: 52px;
  background: #580ea2;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.003em;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #ffffff;
  margin-top: 40px;
  &:hover {
    background: #3f007d;
  }
  &:active {
    background: #271a58;
  }
`;

export const ButtonGetSignUp = styled.button`
  width: 278px;
  height: 52px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.003em;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #000000;
  border: 1px solid #d0cece;
  border-radius: 6px;
  margin-top: 20px;
  ${({ $signUp }) => ($signUp
    ? css`
          margin-top: 10px;
        `
    : css`
          margin-top: 20px;
        `)}; 
  &:hover {
    background: #f4f5f6;
  }
  &:active {
    background: #d9d9d9;
  }
`;

export const ErrorUserNotExist = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
`;
