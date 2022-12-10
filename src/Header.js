import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption'
import HomeIcon from '@mui/icons-material/Home';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PersonIcon from '@mui/icons-material/Person';

function Header() {
    return (
            <div className='header'>
                <div className='header__left'>
                    <img src='../assets/catmermaid_color2.png' alt='Gata com rabo de sereia.' />
                </div>
                <div className='header__left'>
                    <h1>Programa Iara</h1>
                </div>

                <div className='header__right'>
                    <HeaderOption Icon={HomeIcon} title={"Home"} />
                    <HeaderOption Icon={LocalLibraryIcon} title={"Cursos"} />
                    <HeaderOption Icon={WorkOutlineIcon} title={"Vagas"} />
                    <HeaderOption Icon={PersonIcon} title={"Network"} />
                </div>


            </div>
    )
}

export default Header