// import React from 'react'
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";


export default function AppLayout() {

  const lang = useSelector((state)=>state.lang.language)  
  const dir = ((lang == "en") ? 'ltr' :'rtl')
  return (
    <>
      <div dir={dir}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
