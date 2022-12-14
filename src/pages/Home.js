import Sidebar from '../components/Sidebar';
import Feed from '../Feed';
import React from 'react'

function Home() {
  return (
    <div className='app__body'>
         <Sidebar />
          <Feed />
    </div>
  )
}

export default Home