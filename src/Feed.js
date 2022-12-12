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
                <InputOption Icon={LocalLibraryIcon} title='Cursos' color="#70B5"/>
                <InputOption Icon={WorkOutlineIcon} title='Cursos' color="#e7a"/>
                <InputOption Icon={PersonIcon} title='Cursos' color="#7fc"/>

            </div>
        </div>
    </div>
  )
}

export default Feed