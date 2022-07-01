import './login.scss'

import Main from './../common/Header/Main';

import { Link } from 'react-router-dom';

import { KAKAO_AUTH_URL } from './../../utils/OAuth.js';

function Login() {
    return (
        <>
            <Main />
            <main id='loginMain'>
                <form>
                    <ul className='login-list'>
                        <li className='login-title'>
                            <h1>로그인</h1>
                        </li>
                        <li>
                            <a href={KAKAO_AUTH_URL}>
                                <button id='kakao-login' type='button'>
                                    <div className='kakaologo-wrap'>
                                        <img src={process.env.PUBLIC_URL + './assets/kakaologo.png'}/>
                                    </div>
                                    <span>kakao로 계속하기</span>
                                </button>
                            </a>
                        </li>
                        <li className='under-line'>
                            <div className='hr-sect'>또는</div>
                        </li>
                        <li className='input-email'>
                            <label htmlFor='email'>이메일</label>
                            <input type='text' id='email' placeholder='이메일' />
                        </li>
                        <li className='input-pw'>
                            <label htmlFor='password'>비밀번호</label>
                            <input type='password' id='password' placeholder='비밀번호' />
                        </li>
                        <li>
                            <button id='login-click-btn' type='submit'>
                                <span>로그인 하기</span>
                            </button>
                        </li>
                        <li className='signup-link'>
                            <span>아직 계정이 없으신가요?</span>
                            <Link to='/signup'>
                                <span id='moveSignup'>계정 만들기</span>
                            </Link>
                        </li>
                    </ul>
                </form>
            </main>
        </>
    )
}

export default Login;