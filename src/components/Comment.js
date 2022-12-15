import React from 'react'
import InputOption from './InputOption';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import '../styles/InputOption__comment.css'

function Comment() {

    // function 

  return (
    <form className='comment'>
        <div>
        <button className='button__comment'>
            <InputOption Icon={InsertCommentIcon} title="Comentar" color="var(--cinza)"/>
        </button>
        </div>

        <div>
            <textarea className='container__comment'></textarea>
        </div>
    </form>
  )
}

export default Comment
