import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Options from './pages/Options';
import History from './pages/History';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div id='app-container'>
        <Header/>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/options' element={<Options/>}/>
            <Route path='/history' element= {<History/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
