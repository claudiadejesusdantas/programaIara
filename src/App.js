import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className='app'>
      <Header/> 
    {/* App body */}
      <Sidebar/>
      {/* feed */}
      {/* widgets */}
      <Footer/>
    </div>
  );
}

export default App;
