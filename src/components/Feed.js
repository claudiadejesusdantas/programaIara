import React, { useEffect, useState } from 'react'
import '../styles/Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import Post from './Post';
import { db } from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            }))
            )
        );
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoURL: "",
            timestamp: new Date().getTime()
        });
        setInput("");
    };

    return (
        <div className='feed'>
            <div className='feed_inputContainer'>
                <div className='feed__input'>
                    <CreateIcon />
                    <form>
                        <input placeholder='Olá, aqui podemos conversar sobre tudo. Dúvidas do "tudo"? Leia as diretrizes ao lado.' value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit"> Enviar </button>
                    </form>
                </div>
            </div>

            <FlipMove>
            {posts.map(({ id, data: { name, description, message, photoUrl } }) =>
                <Post
                    key={id}
                    id={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            )}
            </FlipMove>
        </div>
    )
}

export default Feed