import React from 'react';
import { Link } from "react-router-dom";
import "./css/appBar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './sidebar';
import ScrollUp from './scollUp';


function AppBar() {
    const openMenu = () => {
        const sidebar = document.querySelector('#side-bar')
        sidebar.classList.add('active')
    }

    return (
        <div id='app-bar'>
            <Sidebar />
            <ScrollUp />
            <div className='l1'>
                <Link className='logo' to={"/"}>
                    Farafina
                </Link>
                <div className='search-bar' >
                    <select name="" id="">
                        <option value="">All</option>
                        <option value="">Cat 1</option>
                        <option value="">Cat 2</option>
                        <option value="">Cat 3</option>
                    </select>
                    <input type="search" placeholder={`Rechercher un article`} />
                    <button><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
                </div>

                <div style={{ display: "flex" }}>

                    <div className='connexion'>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        <span>Connexion</span>
                    </div>
                    <Link className='shopping-cart'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                        </svg>
                    </Link>
                </div>
            </div>


            <div className='l2-min'>
                <div className='search-bar' >
                    <select name="" id="">
                        <option value="">All</option>
                        <option value="">Cat 1</option>
                        <option value="">Cat 2</option>
                        <option value="">Cat 3</option>
                    </select>
                    <input type="search" placeholder={`Rechercher un article`} />
                    <button><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
                </div>
            </div>
            <div className='l2'>
                <div className='menu-toggle-open' onClick={openMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </div>
                <div className='category-list'>
                    <span><Link className='category active'>Accueil</Link></span>
                    <span><Link className='category'>Category h</Link></span>
                    <span><Link className='category'>Category g</Link></span>
                    <span><Link className='category'>Category r</Link></span>
                    <span><Link className='category'>Category e</Link></span>
                    <span><Link className='category'>Category r</Link></span>
                    <span><Link className='category'>Category j</Link></span>
                    <span><Link className='category'>Category d</Link></span>
                    <span><Link className='category'>Category m</Link></span>
                </div>
            </div>
        </div>
    )
}


export default AppBar