import { Avatar } from '@mui/material'
import React, { forwardRef, useEffect, useState } from 'react'
import ReactLinkify from 'react-linkify';
import InputOption from './InputOption'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import '../styles/Post.css'
import '../styles/InputOption__like.css'
import Comment from './Comment';
import { db } from '../firebase';

const Post = forwardRef(({ id, key, name, description, message, photoUrl, likes }, ref) => {

    useEffect(() => {
        setLikeCounter(likes ? likes : 0)
    })

    //CURTIDAS
    const [likeCounter, setLikeCounter] = useState(0);
    // const [like, setLike] = useState('');


    // Função de curtir postagem
    function curtirPost() {
        let newConter = likeCounter + 1;

        setLikeCounter(newConter);
        console.log(id);
        db.collection("posts").doc(id).update({
            likeCounter: newConter
        })
    }



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
                <ReactLinkify componentDecorator={(decoratedHref, decoratedText, key) => (<a target="blank" href={decoratedHref} key={key}> {decoratedText} </a>)}>
                    <p>{message}</p>
                </ReactLinkify>
            </div>

            <div className='container__buttons'>
                <button className='button__like' onClick={curtirPost}>
                    <InputOption Icon={ThumbUpIcon} title="Gostei" color="var(--cinza)" />
                    <div className='likeCounter'>
                        {likeCounter}
                    </div>
                </button>
                <div>
                    <Comment postId={id} />
                </div>
            </div>
        </div>
    )
})

export default Post