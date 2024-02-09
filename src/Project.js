import React from 'react'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import './App.css'

import Home from './Home'
import About from './About'
import Gallary from './Gallary'
import PageNotFound from './PageNotFound'
import Contact from './Contact'
import Services from './Services'


export default function Project() {
  return (
    <div>
      <BrowserRouter>   
        <ul className='new'>
          <li><Link to="/" className='two'>Home</Link></li>
          <li><Link to="/about" className='two'>About Us</Link></li>
          <li><Link to="/gallary" className='two'>Gallary</Link></li>
          <li><Link to="/service" className='two'>Services</Link></li>
          <li><Link to="/contact" className='two'>Contact</Link></li>&nbsp;&nbsp;&nbsp;&nbsp;
          {/* <li><Link to="*">PageNotFound</Link></li> */}
        </ul>

        <Routes>
          <Route path="/" exact={true} element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/gallary" element={<Gallary/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/service" element={<Services/>}></Route>
          <Route path="/*" element={<PageNotFound/>}></Route>
        </Routes>
      </BrowserRouter>   
    </div>
  )
}
