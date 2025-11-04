
import {Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Landingpage from './Pages/Landingpage';
import Resumegenerator from './Pages/Resumegenerator';
import History from './Pages/History';
import Form from './Pages/Form';
import Pagenotfound from './Pages/Pagenotfound';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='' element = {<Landingpage/>}></Route>
        <Route path='/resume-generator' element = {<Resumegenerator/>}></Route>
        <Route path='/history' element = {<History/>}></Route>
        <Route path='/form' element = {<Form/>}></Route>
        <Route path='/*' element = {<Pagenotfound/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
