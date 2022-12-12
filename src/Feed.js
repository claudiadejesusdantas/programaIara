import React from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PersonIcon from '@mui/icons-material/Person';

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
                <InputOption Icon={WorkOutlineIcon} title='Trabalho' color="var(--trabalho)"/>
                <InputOption Icon={PersonIcon} title='Mulheres' color="var(--mulheres)"/>

            </div>
        </div>
    </div>
  )
}

export default Feed