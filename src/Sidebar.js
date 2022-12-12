import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/5120x2880-dark-blue-solid-color-background.jpg/2560px-5120x2880-dark-blue-solid-color-background.jpg" alt="Foto de fundo um retângulo azul." />
                <Avatar />
                <h2>Claudia Dantas</h2>
                <h4>claudia@orkut.br</h4>
            </div>
            <div className='sidebar__about'>
                <h4>Sobre mim: </h4>
                <p>loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. </p>
            </div>
            <div className='sidebar__bottom'>
                <h2> Frase </h2>
                <p> "Eu recomendo a todos que tentem programar pelo menos uma vez ...especialmente as meninas." - Malala Yoursafzai </p>

            </div>
        </div>
    )
}

export default Sidebar