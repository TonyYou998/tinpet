import React from 'react'
import Carousel from './components/Carousel'
import DogsArr from './components/DogsArr'
import Footer from './components/Footer'

export default function HomePage() {
    return (
        <div className="homepage">
            <Carousel/>
            <DogsArr/>
            <Footer/>
        </div>
    )
}
