import { Avatar } from '@mui/material'
import React, {forwardRef} from 'react'
import InputOption from './InputOption'
import './Post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ShareIcon from '@mui/icons-material/Share';
import ReactLinkify from 'react-linkify';

const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
    return (
        <div ref={ref} className='post'>
            <div className='post__header'>
                <Avatar src={photoUrl}>{!name ? "?" : name[0]}</Avatar>
                <div className='post__info'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className='post__body'>
                <ReactLinkify componentDecorator={(decoratedHref, decoratedText, key) => ( <a target="blank" href={decoratedHref} key={key}> {decoratedText} </a> )}> 
                    <p>{message}</p>
                </ReactLinkify>
            </div>

            <div className='post__buttons'>
                <InputOption Icon={ThumbUpIcon} title="Gostei" color="var(--cinza)"/>
                <InputOption Icon={InsertCommentIcon} title="Comentar" color="var(--cinza)"/>
                <InputOption Icon={ShareIcon} title="Compartilhar" color="var(--cinza)"/>
            </div>
        </div>
    )
})

export default Post