import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
    return (
        <div className="banner__wrapper">
                <div className="banner__title">
                    <h2>Find your own happiness</h2>
                    <p className="text-center pt-1">Scratch a dog and you will find a permanent job</p>
                </div>
                <div className="banner__btn d-flex pt-4 justify-content-around ">
                    <Link to="/pet-all" className="btn btn-primary  banner__btn py-2 ">Find A Pet</Link>
                    <div className="btn btn-primary  py-2 banner__btn">Give your pet</div>
                </div>
            
        </div>
    )
}
