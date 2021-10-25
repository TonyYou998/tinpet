import React from 'react'
import FindMore from './components/FindMore'
import Header from './components/Header'
import Footer from '../HomePage/components/Footer'
import Intro from './components/Intro'

export default function IntroProductPage() {
    return (
        <div className="IntroProductPage">
            <Header/>
            <Intro/>
            <FindMore/>
            <Footer/>
        </div>
    )
}