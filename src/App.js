import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Login';

function App() {
  const user = useSelector(selectUser)

  return (
    <div className='app'>
      <Header />
      {!user ? <Login /> : (
        <div className='app__body'>
          <Sidebar />
          <Feed />
          {/* widgets */}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
