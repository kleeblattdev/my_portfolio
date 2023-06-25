//library import
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//component import
import Header from './assets/components/Header';
//pages import
import Home from './assets/pages/home';
import About from './assets/pages/about';
import Projects from './assets/pages/projects';
import Contact from './assets/pages/contact';
//SCSS import
import './App.scss'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
