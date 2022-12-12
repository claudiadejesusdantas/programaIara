import { Avatar } from '@mui/material'
import React from 'react'
import InputOption from './InputOption'
import './Post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ShareIcon from '@mui/icons-material/Share';

function Post() {
    return (
        <div className='post'>
            <div className='post__header'>
                <Avatar />
                <div className='post__info'>
                    <h2>Claudia Dantas</h2>
                    <p>Descrição.</p>
                </div>
            </div>

            <div className='post__body'>
                <p>A mensagem vai aqui!!!</p>
            </div>

            <div className='post__buttons'>
                <InputOption Icon={ThumbUpIcon} title="Gostei" color="var(--cinza)"/>
                <InputOption Icon={InsertCommentIcon} title="Comentar" color="var(--cinza)"/>
                <InputOption Icon={ShareIcon} title="Compartilhar" color="var(--cinza)"/>

            </div>
        </div>
    )
}

export default Post