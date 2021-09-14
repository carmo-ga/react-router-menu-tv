import React from 'react'
import './Band.css'
import Titulo from '../Titulo/Titulo.js'
import ImgBand from '../../imagens/band.jpg'

export default function Band() {
    return (
        <div className="band">
            <Titulo text="Band" />
            <figure>
                <img src={ImgBand} alt="Band" className="imagem" />
            </figure>
        </div>
    )
}