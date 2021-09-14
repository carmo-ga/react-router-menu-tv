import React from 'react'
import './Globo.css'
import Titulo from '../Titulo/Titulo.js'
import ImgGlobo from '../../imagens/globo.jpg'

export default function Globo() {
    return (
        <div className="globo">
            <Titulo text="Globo" />
            <figure>
                <img src={ImgGlobo} alt="TV Globo" className="imagem" />
            </figure>
        </div>
    )
}