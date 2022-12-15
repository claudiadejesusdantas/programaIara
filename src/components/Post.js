import { Avatar } from '@mui/material'
import React, {forwardRef, useState} from 'react'
import ReactLinkify from 'react-linkify';
import InputOption from './InputOption'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import '../styles/Post.css'
import '../styles/InputOptio__like.css'

const Post = forwardRef(({name, description, message, photoUrl}, ref) => {

    //CURTIDAS
    const [likeCounter, setLikeCounter] = useState(0);
    // const [like, setLike] = useState('');

    // Função de curtir postagem
    function curtirPost(){
        setLikeCounter(likeCounter+1);
    }   

    //COMENTÁRIOS

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
                <button className='button__like' onClick={curtirPost}>
                    <InputOption Icon={ThumbUpIcon} title="Gostei" color="var(--cinza)"/>
                    <div className='likeCounter'>
                        {likeCounter}
                    </div>
                </button>
                <InputOption Icon={InsertCommentIcon} title="Comentar" color="var(--cinza)"/>
            </div>
        </div>
    )
})

export default Post