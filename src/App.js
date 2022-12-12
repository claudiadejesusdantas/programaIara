import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='app__body'>
        <Sidebar />
        <Feed />
        {/* widgets */}
      </div>

      <Footer />
    </div>
  );
}

export default App;
