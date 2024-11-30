import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from './Components/footer/App_Footer'
import ScrollToTop from './Components/ScrollToTop'
import Chatbot from './Chatbot'
function Layout(){
    return(
        <>
        <ScrollToTop />
    <Navbar/>
    <Outlet/> 
    <Chatbot/>
    <Footer/>
    </>
    )
}
export default Layout

