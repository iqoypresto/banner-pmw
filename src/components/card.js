'use client'

import Image from "next/image"
import { useState } from "react"

export const Card = () => {
    const [headerBanner, setHeaderBanner] = useState('Muhammad Rifqi Maulana')
    const [inputString, setInputString] = useState('')
    
    const handleChange = (e) => {
        setInputString(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setHeaderBanner(inputString)
    }
    return (
        <div className="banner-container">
            <div className="header-banner-wrapper">
                <Image
                    src='/camel-img.png'
                    width={100}
                    height={100}
                    style={{
                        borderRadius: '50%',
                    }}
                    alt='gambar-unta'
                />
                <div className="header-decsription">
                    <h2 style={{ fontWeight: '500' }}>{headerBanner}</h2>
                    <div style={{
                        color: 'grey',
                        fontWeight: '300',
                        fontSize: '15px'
                    }}>
                        <p>D121211013</p>
                        <p>No Pain, No Gain!</p>
                    </div>
                </div>
            </div>
            <form className="input-field-wrapper" onSubmit={handleSubmit}>
                <input type="text" placeholder="Tuliskan namamu..." onChange={handleChange} />
                <button type="submit" style={{
                }}>
                    Halo!
                </button>
            </form>
        </div>
    )
}