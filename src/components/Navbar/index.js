import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar__wrapper my-2">
            <ul className="navbar__container d-flex justify-content-start">
                <li  className="mx-4">About us</li>
                <li className="mx-4">Find a pet</li>
                <li className="mx-4">Breeds</li>
                <li className="mx-4">Market</li>
            </ul>
        </nav>
    )
}
