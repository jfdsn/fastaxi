import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Options from './pages/Options';
import History from './pages/History';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/options' element={<Options/>}/>
        <Route path='/history' element= {<History/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
