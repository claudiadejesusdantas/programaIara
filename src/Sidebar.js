import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

function Sidebar() {
    const user = useSelector(selectUser);
    console.log(user)

    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/5120x2880-dark-blue-solid-color-background.jpg/2560px-5120x2880-dark-blue-solid-color-background.jpg" 
                    alt="Foto de fundo um retângulo azul." 
                />
                <Avatar src={user.photoUrl} className="sidebar__avatar">
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className='sidebar__about'>
                <h4>Lembre-se: </h4>
                <p>"Eu recomendo a todos que tentem programar pelo menos uma vez ...especialmente as meninas." - Malala Yoursafzai </p>
            </div>
            <div className='sidebar__bottom'>
                <ul> Diretrizes da plataforma: 
                    <li>🧜‍♀️ Todas devem ser respeitadas, independentemente de religião, condição física, entre outros. Então não será tolerado qualquer caso de xenofobia, racismo, homofobia, sexismo ou qualquer tipo de discurso de ódio! Passível de ban imediato!</li>
                    <li>🧜‍♀️ Antes de divulgar algo, consulte por gentileza se a fonte é confiável.</li>
                    <li>🧜‍♀️ Links, imagens, mensagens, vídeos que contenham material sensível (gore, pornográfico, mensagem de ódio, etc.) não serão permitidos aqui!</li>
                    <li>🧜‍♀️ Sem imagens e/ou mensagens que contenham informação pessoais de outras pessoas! </li>
                    <li>🧜‍♀️ Mensagens com o intuito de causar irritação, serem negativas, que visam somente criar transtornos não serão toleradas!</li>
                    <li>🧜‍♀️ Qualquer tentativa de burlar uma punição levará a ban imediato!</li>
                    <li>🧜‍♀️ Tenham bom senso, ética e respeito!</li>
                    <li>🧜‍♀️ Esperamos que esse seja um ambiente de sororidade, a qual cada uma pode ajudar a outra! 💜</li>
                    
                    

                </ul>
                

            </div>
        </div>
    )
}

export default Sidebar