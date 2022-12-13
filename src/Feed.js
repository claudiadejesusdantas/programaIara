import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PersonIcon from '@mui/icons-material/Person';
import Post from './Post';
import { db } from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

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
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit"> Enviar </button>
                    </form>
                </div>

                <div className='feed__inputOptions'>
                    <InputOption Icon={LocalLibraryIcon} title='Cursos' color="var(--cursos)" />
                    <InputOption Icon={WorkOutlineIcon} title='Vagas' color="var(--vagas)" />
                    <InputOption Icon={PersonIcon} title='Network' color="var(--network)" />
                </div>
            </div>

            {posts.map(({ id, data: { name, description, message, photoUrl } }) =>
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            )}
        </div>
    )
}

export default Feed