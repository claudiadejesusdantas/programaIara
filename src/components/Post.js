import { Avatar } from '@mui/material'
import React, {forwardRef, useState} from 'react'
import InputOption from './InputOption'
import '../styles/Post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ShareIcon from '@mui/icons-material/Share';
import ReactLinkify from 'react-linkify';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const Post = forwardRef(({name, description, message, photoUrl, likePosts}, ref) => {
    const [likeCounter,setLikeCounter] = useState(0); 
    const [newCommentText, setNewCommentText] = useState('');
    const [comments, setComments] = useState('');
    const [like, setLike] = useState(false);
    const user = useSelector(selectUser);
    console.log(user);
//  Fazer um filtro, if com id do usuário;

    function curtirPost() {
        setLikeCounter(likeCounter + 1);

    };

    function handleCreateNewComment(event) {
        event.preventDefault()
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }
    
    function handleNewCommentChange(event) {
        setNewCommentText(event.target.value);
        console.log(event.target.value);
        event.target.setCustomValidity('');
    }
    
    function handleNewCommentInvalid(event) {
        event.target.setCustomValidity('Esse campo é obrigatório');
    } 

    // const isNewCommentEmpty = newCommentText.length === 0;

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
                <button onClick={curtirPost}>
                    {/* if, colocar dislike */}
                    <InputOption Icon={ThumbUpIcon} title="Gostei" color="var(--cinza)"/>{likeCounter}
                </button>

                <InputOption Icon={InsertCommentIcon} title="Comentar" color="var(--cinza)"/>
                
                <InputOption Icon={ShareIcon} title="Compartilhar" color="var(--cinza)"/>
            </div>

            <form 
                className='post_comentario' 
                onSubmit={handleCreateNewComment}
            >
                <textarea
                    name = "comentario"
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                />
                <button 
                    type="submit" 
                    //disabled={isNewCommentEmpty}
                >Publicar</button>
            </form>
        </div>
    )
});

export default Post