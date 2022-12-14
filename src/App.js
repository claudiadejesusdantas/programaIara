import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from './components/Footer';
// import Sidebar from './Sidebar';
// import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
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
      {/* <Header /> */}
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
