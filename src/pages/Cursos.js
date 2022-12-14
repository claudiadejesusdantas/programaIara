import React, { useEffect, useState } from 'react'
// import Sidebar from '../Sidebar'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from '../components/InputOption';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { db } from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';
import Curso from '../components__pages/Curso';
import './Cursos.css'

function Cursos() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        db.collection("cursos").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
            setCursos(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            }))
            )
        );
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection("cursos").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoURL: "",
            timestamp: new Date().getTime()
        });
        setInput("");
    };

    return (
        <div className='app__body'>
            <div className='cursos'>
                
                <div className='cursos_inputContainer'>
                    <div className='container__cabecalhoCursos'>
                            <img className='imgCursos' src='../assets/undraw_studying_re_deca.svg' alt='Ilustração de moça olhando pela janela com blusa azul, caderno, xícara e laptop.' />
                        
                        <div className='cursos__input'>
                            <CreateIcon />
                            <form>
                                <input placeholder='Aqui podemos colocar cursos, bootcamps, artigos...tudo para aprendermos mais!
    ' value={input} onChange={e => setInput(e.target.value)} type="text" />
                                <button onClick={sendPost} type="submit"> Enviar </button>
                            </form>
                        </div>
                    </div>


                    <div className='cursos__inputOptions'>
                        <InputOption Icon={LocalLibraryIcon} title='Cursos' color="var(--cursos)" />
                    </div>
                </div>



                <FlipMove>
                    {cursos.map(({ id, data: { name, description, message, photoUrl } }) =>
                        <Curso
                            key={id}
                            name={name}
                            description={description}
                            message={message}
                            photoUrl={photoUrl}
                        />
                    )}
                </FlipMove>
            </div>
        </div>
    )
}

export default Cursos