import styled from 'styled-components';

import Main from './../common/Header/Main';

import { Link } from 'react-router-dom';

import { KAKAO_AUTH_URL } from './../../utils/OAuth.js';

import kakaoLogo from './../../assets/kakaologo.png';

function Login() {
    return (
        <>
            <Main />
            <LoginMain>
                <form>
                    <LoginList>
                        <LoginTitle>
                            <LoginTitleTExt>로그인</LoginTitleTExt>
                        </LoginTitle>
                        <li>
                            <a href={KAKAO_AUTH_URL}>
                                <KakaoLoginBtn type='button'>
                                    <KakaologoWrap>
                                        <KakaoLogoImg></KakaoLogoImg>
                                    </KakaologoWrap>
                                    <KakaoLoginText>kakao로 계속하기</KakaoLoginText>
                                </KakaoLoginBtn>
                            </a>
                        </li>
                        <UnderLine>
                            <HrSect>또는</HrSect>
                        </UnderLine>
                        <InputBox>
                            <InputLabel htmlFor='email'>이메일</InputLabel>
                            <InfoInput type='text' id='email' placeholder='이메일' />
                        </InputBox>
                        <InputBox>
                            <InputLabel htmlFor='password'>비밀번호</InputLabel>
                            <InfoInput type='password' id='password' placeholder='비밀번호' />
                        </InputBox>
                        <li>
                            <LoginBtn id='login-click-btn' type='submit'>
                                로그인 하기
                            </LoginBtn>
                        </li>
                        <SignUpLink>
                            <span>아직 계정이 없으신가요?</span>
                            <Link to='/signup'>
                                <MoveSignUp>계정 만들기</MoveSignUp>
                            </Link>
                        </SignUpLink>
                    </LoginList>
                </form>
            </LoginMain>
        </>
    )
}

const LoginMain = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 6rem;
`
const LoginList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 20em;
`
const LoginTitle = styled.li`
    text-align: center;
`
const LoginTitleTExt = styled.h1`
    font-size: 32px;
    font-weight: 700;
`
const KakaoLoginBtn = styled.button`
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 40px;
    padding: 0.4375rem 0.8125rem;
    width: 320px;
    height: $btn-height;
    background-color: #ffe812;
    border-radius: 5px;
`
const KakaologoWrap = styled.div`
    position: absolute;
    top: 7px;
    left: 15px;
    width: 24px;
    height: 24px;
`
// 이미지가 안넣어짐
const KakaoLogoImg = styled.div`
    background-image: url(${kakaoLogo});
`
const KakaoLoginText = styled.span`
    padding-top: 2px;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.38;
    color: #000;
`
const UnderLine = styled.li`
    margin: 30px 0;
`
const HrSect = styled.div`
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: rgba(0, 0, 0, 0.35);
    font-size: 12px;
    margin: 8px 0px;

    &::after,
    &::before {
        content: "";
        flex-grow: 1;
        background: rgba(0, 0, 0, 0.35);
        height: 1px;
        font-size: 0px;
        line-height: 0px;
        margin: 0px 16px;
    }
`
const InputBox = styled.li`
    margin-top: 20px;
`
const InputLabel = styled.label`
    margin-bottom:8px;
`
const InfoInput = styled.input`
    width: 100%;
    padding: 8px 12px;
    color: #263747;
    font-size: 16px;
    font-weight: 400;
    background-color: #FBFBFD;
    border: 1px solid #D7E2EB;
    border-radius: 5px;
`
const LoginBtn = styled(KakaoLoginBtn)`
    align-items: center;
    margin-top: 20px;
    background-color: #007bff;
    font-size: 16px;
    color: #fff;
    font-weight: bold;
`
const SignUpLink = styled(InputBox)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #98A8B9;
`
const MoveSignUp = styled.span`
    font-weight: bold;
    color: #000;
    margin-left: 10px;

    &:hover {
        color: blue;
    }
`
export default Login;