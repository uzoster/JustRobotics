import React from 'react'
import  './style/home.scss'
import './style/home_media.scss'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import Article from './Article/Article'
import Content from './content/Content'
import Section from './Section/Section'
import Footer from './footer/Footer'

export default function Home() {



  return (
    <div>
        <Navbar/>
        <Header/>
        <Article/>
        <Content/>
        <Section/>
        <Footer/>
    </div>
  )
}
