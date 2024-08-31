/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link , NavLink } from 'react-router-dom';
import './header.css'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../../store/slices/language';
import { LogedContext } from '../../context/isLoged';
export default function Header() {

  const state = useSelector((state)=>state.lang.language)
  let dispatch = useDispatch()
  function arabic(){
    dispatch(changeLanguage((state=='en')?'ar':'en'));
  }
  const {loged,setLoged} = useContext(LogedContext);
  
 const logout=()=>{
  setLoged(false)
  }
  return <> 

<Navbar expand="lg" className="bg-dark">
        <Button id='ar' onClick={arabic} className="bg-dark text-light border mx-5">{(state=='en')?'عربى':'English'}</Button>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-between w-100">
            <div className='m-2 col-5'>
            <NavLink to='/' className='m-2 text-decoration-none'>{(state=='en')?'Home':' الرئيسية '}</NavLink>
            <NavLink to='/about' className='m-2 text-decoration-none'>{(state=='en')?'About Us':' عنا '}</NavLink>
            <NavLink to='/contact' className='m-2 text-decoration-none'>{(state=='en')?'Contact Us':' تواصل معنا '}</NavLink>
            <NavLink to='/movies'  className='m-2 text-decoration-none'>{(state=='en')?'movies':' الافلام '}</NavLink>
            <NavLink to='/favoriteMovies'  className='m-2 text-decoration-none'>{(state=='en')?'favorite movies':' الافلام المفضله '}</NavLink>
            <NavLink to='/todo'  className='m-2 text-decoration-none'>{(state=='en')?'todo':' تو دو '}</NavLink>
            </div>
            <div className='m-2 col-2'>
            <NavLink to='/login' onClick={logout} className={`m-2 text-decoration-none ${loged?'':'d-none'}`}>{(state=='en')?'Logout':'تسجيل الخروج'}</NavLink>
            <NavLink to='/login' className={`m-2 text-decoration-none ${loged?'d-none':''}`}>{(state=='en')?'Login':' تسجيل الدخول '}</NavLink>
            <NavLink to='/register' className={`m-2 text-decoration-none ${loged?'d-none':''}`}>{(state=='en')?'register':' حساب جديد '}</NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}
