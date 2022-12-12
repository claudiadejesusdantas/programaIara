import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src="https://th.bing.com/th/id/R.9b4f7a943ae8ea770a2a0e03c0f99453?rik=%2bseQiYwqhWcFtQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fb%2f8%2ff%2f538425.jpg&ehk=0cwq7nYMQ8w7VynPIzTrfmoE54ZwBPNleaJEk4HvqJY%3d&risl=&pid=ImgRaw&r=0" alt="Foto de fundo um retângulo vermelho." />
                <Avatar />
                <h2>Claudia Dantas</h2>
                <h4>claudia@orkut.br</h4>
            </div>
            <div className='sidebar__about'>
                <h4>Sobre mim: </h4>
                <p>loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. </p>
            </div>
            <div className='sidebar__bottom'>
                <h2> Suas habilidades </h2>
                <p> Javascript </p>
                <p> HTML </p>
                <p> CSS </p>
                <p> React </p>
                <p> Redux </p>
            </div>
        </div>
    )
}

export default Sidebar