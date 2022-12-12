import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css'

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
                <p></p>
            </div>
        </div>
    )
}

export default Post