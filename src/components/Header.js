import React from 'react'
import '../styles/Header.css'
import HeaderOption from './HeaderOption'
import HomeIcon from '@mui/icons-material/Home';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

function Header() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    };

    
    return (
            <div className='header'>
                <div className='header__left'>
                    <img src='../assets/catmermaid_color1.png' alt='Gata com rabo de sereia.' />
                </div>
                <div className='header__left'>
                    <h1>Programa Iara</h1>
                </div>

                <div className='header__right'>
                    <Link to="/"><HeaderOption Icon={HomeIcon} title={"Home"} /></Link>
                    <Link to="/cursos"><HeaderOption Icon={LocalLibraryIcon} title={"Cursos"} /></Link>
                    <Link to="/vagas"><HeaderOption Icon={WorkOutlineIcon} title={"Vagas"} /></Link>
                    <Link to="/network"><HeaderOption Icon={PersonIcon} title={"Network"} /></Link>
                    <HeaderOption 
                        avatar={true} 
                        title='me'
                        onClick={logoutOfApp}
                        />
                </div>
            </div>
    )
}

export default Header