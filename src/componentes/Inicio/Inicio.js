import React from 'react'
import './Inicio.css'
import Titulo from '../Titulo/Titulo.js'
import ImgProgramacao from '../../imagens/programacao.jpg'

export default function Inicio() {
    return (
        <div className="inicio">
            <Titulo text="Programação da Televisão!" />
            <figure>
                <img src={ImgProgramacao} alt="Programação da TV" className="imagem" />
            </figure>
        </div>
    )
}