import React, { useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/Login';
import { auth } from './firebase';
import ApplicationRoutes from './Router';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL
          }))
      } else {
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className='app'>
      {!user ? <Login /> : (
        <div>
          <ApplicationRoutes/>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
