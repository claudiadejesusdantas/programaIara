import { Avatar } from '@mui/material'
import React, {forwardRef} from 'react'
import InputOption from '../components/InputOption'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ShareIcon from '@mui/icons-material/Share';
import ReactLinkify from 'react-linkify';
import './Vaga.css'

const Vaga = forwardRef(({name, description, message, photoUrl}, ref) => {
    return (
        <div ref={ref} className='vaga'>
            <div className='vaga__header'>
                <Avatar src={photoUrl}>{!name ? "?" : name[0]}</Avatar>
                <div className='vaga__info'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className='vaga__body'>
                <ReactLinkify componentDecorator={(decoratedHref, decoratedText, key) => ( <a target="blank" href={decoratedHref} key={key}> {decoratedText} </a> )}> 
                    <p>{message}</p>
                </ReactLinkify>
            </div>

            {/* <div className='vaga__buttons'>
                <InputOption Icon={ThumbUpIcon} title="Gostei" color="var(--cinza)"/>
                <InputOption Icon={InsertCommentIcon} title="Comentar" color="var(--cinza)"/>
                <InputOption Icon={ShareIcon} title="Compartilhar" color="var(--cinza)"/>
            </div> */}
        </div>
    )
})

export default Vaga