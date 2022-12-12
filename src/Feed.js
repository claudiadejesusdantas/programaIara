import React from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';

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
                
            </div>
        </div>
    </div>
  )
}

export default Feed