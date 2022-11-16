import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'components/main';
import Login from 'components/login';
import SignUp from 'components/login/signup';
import StyleProvider from 'styles';

function App() {
  return (
    <StyleProvider>
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
       </Routes>
     </BrowserRouter>
    </StyleProvider>
  );
}

export default App;