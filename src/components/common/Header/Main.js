import './main.scss';

import { useNavigate } from 'react-router-dom';

function Main() {
    let navigate =  useNavigate();

    const moveHome = () => {
        navigate('/')
    }
    const moveLogin = () => {
        navigate('/login')
    }
    const moveSignup = () => {
        navigate('/signup')
    }
    const moveUsed = () => {
        navigate('/used')
    }
    const moveCommunity = () => {
        navigate('/community')
    }
    
    return (
        <header>
            <ul className='header-list'>
                <li className='logoimg-wrap'>
                    <button onClick={moveHome} className='home-btn' type='button'>
                        <img alt='로고이미지' src={process.env.PUBLIC_URL + './assets/logoimg.png'} />
                    </button>
                </li>
                <li className='header-link'>
                    <button onClick={moveUsed} className='used-btn' type='button'>
                        <p>중고거래</p>
                    </button>
                    <button onClick={moveCommunity} className='community-btn' type='button'>
                        <p>커뮤니티</p>
                    </button>
                </li>
                <li className='header-join'>
                    <button onClick={moveSignup} className='signup-btn' type='button'>
                        <p>계정 만들기</p>
                    </button>
                    <button onClick={moveLogin} className='login-btn' type='button'>
                        <p>로그인</p>
                    </button>
                </li>
            </ul>
        </header>
    )
}

export default Main;
