import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'components/main';
import StyleProvider from 'styles';

function App() {
  return (
    <StyleProvider>
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<Main/>}/>
       </Routes>
     </BrowserRouter>
    </StyleProvider>
  );
}

export default App;