//library import
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//component import
import Header from './assets/components/Header';
//pages import
import Home from './assets/pages/Home.jsx';
import About from './assets/pages/About.jsx';
import Projects from './assets/pages/Projects.jsx';
import Contact from './assets/pages/Contact.jsx';
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
