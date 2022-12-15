import React, { useEffect, useState } from 'react'
import InputOption from './InputOption';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import '../styles/InputOption__comment.css'
import { db } from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

function Comment(props){

    const user = useSelector(selectUser);
    const [newCommentText, setNewCommentText] = useState('');
    const [comments, setComments] = useState([]);
    // console.log(props.postId)

    useEffect(() => {
        db.collection("comments").where('postId', '==', props.postId).orderBy('timestamp', 'desc').onSnapshot((snapshot) => setComments(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))
        )
        )

    });

    const sendComment = e => {
        e.preventDefault();

        db.collection("comments").add({
            name: user.displayName,
            description: user.email,
            message: newCommentText,
            photoUrl: user.photoUrl || "",
            postId: props.postId,
            timestamp: new Date().getTime()
        })
        setNewCommentText('')
    }


    return (
        <>
            <form className='comments' onSubmit={sendComment}>
                <div>
                    <button className='button__comment' type='submit' onChange={sendComment}>

                        <InputOption Icon={InsertCommentIcon} title="Comentar" color="var(--cinza)" />
                    </button>
                </div>

                <div>
                    <input
                        type="text"
                        className='container__comment'
                        placeholder='Digite o seu comentário aqui.'
                        value={newCommentText}
                        onChange={e => setNewCommentText(e.target.value)}
                    >
                    </input>
                </div>
            </form>
            <div className='box__comment'>
                <FlipMove>
                    {comments.map(({ id, data: { name, description, message, photoUrl } }) =>
                        <p className='message__comment'>{message}</p>
                    )}
                </FlipMove>
            </div>
        </>
    )
}

export default Comment
