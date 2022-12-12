import React from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PersonIcon from '@mui/icons-material/Person';
import Post from './Post';

function Feed() {
  return (
    <div className='feed'>
        <div className='feed_inputContainer'>
            <div className='feed__input'>
                <CreateIcon/>
                <form>
                    <input type="text"/>
                    <button type="submit"> Enviar </button>
                </form>
            </div>

            <div className='feed__inputOptions'>
                <InputOption Icon={LocalLibraryIcon} title='Cursos' color="var(--cursos)"/>
                <InputOption Icon={WorkOutlineIcon} title='Vagas' color="var(--vagas)"/>
                <InputOption Icon={PersonIcon} title='Network' color="var(--network)"/>
            </div>

            <Post
                name="Claudia Dantas"
                description="This is a test"
                message="Wow this worked..."
            />
        </div>
    </div>
  )
}

export default Feed