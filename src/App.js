import './App.css';
import React from 'react';
import Nav from './Nav';
import Gallery from './Gallery';
import Blog from './Blog';
import Home from './Home.jsx';
import AboutUs from './Features.jsx';
import Footer from './Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
 import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Contact from './Contact.jsx';



function App() {
  return (
    <div className="App">

{/* <Nav/>
<Hero/>
<Footer/> */}

       <BrowserRouter>

      <Nav/>
       <Routes>
     
       <Route path='/*' element={ <Home/>}/>
       <Route path='/features' element={ <AboutUs/>}/>
       <Route path='/Contact' element={ <Contact/>}/>
       <Route path='/Gallery' element={ <Gallery/>}/>
       <Route path='/Blog' element={ <Blog/>}/>

      </Routes>

      <Footer/>

      </BrowserRouter> 


    </div>
  );
}

export default App;
