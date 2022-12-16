import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from '../components/InputOption';
import PersonIcon from '@mui/icons-material/Person';
import { db } from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';
import People from '../components__pages/People';
import './Network.css'

function Network() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState('');
  const [network, setNetwork] = useState([]);

  useEffect(() => {
    db.collection("network").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
      setNetwork(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("network").add({
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
      <div className='network'>

        <div className='network_inputContainer'>
        <div className='container__cabecalhoNetwork'>
        <img className='imgNetwork' src='../assets/undraw_happy_women_day_fbjt network.svg' alt='#' />

          <div className='network__input'>
            <CreateIcon />
            <form>
              <input placeholder='Aqui você se apresenta, coloca os links das suas opções de contato e adiciona outras amigas.' value={input} onChange={e => setInput(e.target.value)} type="text" />
              <button onClick={sendPost} type="submit"> Enviar </button>
            </form>
          </div>
          </div>

          <div className='network__inputOptions'>
            <InputOption Icon={PersonIcon} title='Network' color="var(--network)" />
          </div>
        </div>

        <FlipMove>
          {network.map(({ id, data: { name, description, message, photoUrl } }) =>
            <People
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

export default Network