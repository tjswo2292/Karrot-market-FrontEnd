import GlobalStyle from './styles/GlobalStyle';
import Main from "./components/common/Header/Main";
import Login from './components/Login/Login'
import Signup from './components/SignUp/Signup'
import Used from './components/Used/Used'
import Community from './components/Community/Community'

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <GlobalStyle />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/used' element={<Used />} />
        <Route path='/community' element={<Community />} />
        {/* <Route paht='/oauth/callback/kakao' element={KakaoRedirectHandler} /> */}
      </Routes>
    </div>
  );
}

export default App;
