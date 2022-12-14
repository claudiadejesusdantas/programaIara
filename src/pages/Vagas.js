import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from '../components/InputOption';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { db } from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';
import Vaga from '../components__pages/Vaga';
import './Vagas.css'

function Vagas() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState('');
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    db.collection("vagas").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
      setVagas(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("vagas").add({
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
      <div className='vagas'>

        <div className='vagas_inputContainer'>
          <div className='container__cabecalhoVagas'>
            <img className='imgVagas' src='../assets/undraw_learning_sketching_nd4f.svg' alt='#' />

            <div className='vagas__input'>
              <CreateIcon />
              <form>
                <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder='Aqui você coloca as vagas de emprego, oportunidades freelance, clt, pj... Coloque o máximo de informações como nome da empresa, requisitos etc.' />
                <button onClick={sendPost} type="submit"> Enviar </button>
              </form>
            </div>
          </div>

          <div className='vagas__inputOptions'>
            <InputOption Icon={WorkOutlineIcon} title='Vagas' color="var(--vagas)" />
          </div>
        </div>

        <FlipMove>
          {vagas.map(({ id, data: { name, description, message, photoUrl } }) =>
            <Vaga
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

export default Vagas