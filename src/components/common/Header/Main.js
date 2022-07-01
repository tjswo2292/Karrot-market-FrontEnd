import styled from 'styled-components';

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
            <HeaderList>
                <HeaderLink>
                    <HomeBtn onClick={moveHome} type='button'>
                        <LogoImg alt='로고이미지' src={process.env.PUBLIC_URL + './assets/logoimg.png'} />
                    </HomeBtn>
                </HeaderLink>
                <HeaderLink>
                    <HeaderBtn onClick={moveUsed} type='button'>
                        중고거래
                    </HeaderBtn>
                    <HeaderBtn onClick={moveCommunity} type='button'>
                        커뮤니티
                    </HeaderBtn>
                </HeaderLink>
                <HeaderLink>
                    <HeaderBtn onClick={moveSignup} type='button'>
                        계정 만들기
                    </HeaderBtn>
                    <HeaderBtn onClick={moveLogin} type='button'>
                        로그인
                    </HeaderBtn>
                </HeaderLink>
            </HeaderList>
        </header>
    )
}

const HeaderList = styled.ul`
    display: flex;
    justify-content: space-between;
    height: 2.099em;
    padding: 0 1rem;
    background-color: #000;
`;
const HomeBtn = styled.button`
    width: 11.375em;
    height: 2.125em;
`;
const LogoImg = styled.img`
    height: 100%;
`;
const HeaderLink = styled.li`
    display: flex;
    align-items: center;
    padding: 0 1rem;
`;
const HeaderBtn = styled.button`
    font-size: 16px;
    font-weight: bold;
    color: #B2C0CC;
    padding: 0 0.5em;
`
export default Main;
