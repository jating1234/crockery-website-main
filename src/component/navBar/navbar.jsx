import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../navBar/navbar.css'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Profile_user from "../../assets/image/Profile_user.png";
import UseAuth from "../../custom-hooks/Authuse"
import { signOut } from "firebase/auth"
import { auth } from '../../pages/firebase';
import { toast } from 'react-toastify';


function navbar({size}) {
    const [active, setActive] = useState('Home');


    // searching feature   ============
    const navigate = useNavigate()
    const [SearchItem, setSearchItem] = useState("")
    

    const searchingHendling = (e) => {
        e.preventDefault()
        navigate(`/search/${SearchItem}`)
        setSearchItem("")
    }

    const { currentUser } = UseAuth()
    const profileActionRef = useRef(null)
    const toggleProfileAction = () => profileActionRef.current.classList.toggle("show_profileAction");

    const logOut = () => {

        signOut(auth).then(() => {
            toast.success('Logged Out')
        }).catch(err => {
            toast.error(err.message)
        })
    }



    //  Cart feature ==========


    return (
        <header className="navbar" >
            <Link to='/' style={{ "textDecoration": "none" }}><img src="https://www.zarla.com/images/zarla-crockery-craze-1x1-2400x2400-20230110-qkk8pj9bj44kkpdjr7b8.png?crop=1:1,smart&width=250&dpr=2" alt="" width={80} /></Link>

            {/*==== menu ======= */}

            <ul className="menu">
                <Link to='/' style={{ "textDecoration": "none" }}><li onClick={() => { setActive('Home') }}>Home{active === 'Home' ? <hr /> : <></>} </li></Link>
                <Link to='/Decor' style={{ "textDecoration": "none" }}><li onClick={() => { setActive('Decor') }}>Decor {active === 'Decor' ? <hr /> : <></>} </li></Link>
                <Link to='/DiningKitchen' style={{ "textDecoration": "none" }}><li onClick={() => { setActive('DiningKitchen') }}>Dining & Kitchen {active === 'DiningKitchen' ? <hr /> : <></>} </li></Link>
                <Link to='/Living' style={{ "textDecoration": "none" }}><li onClick={() => { setActive('Living') }}>Living {active === 'Living' ? <hr /> : <></>} </li></Link>
            </ul>


            {/* ------- search bar ------- */}
            <form className="search-Bar" onSubmit={searchingHendling}>
                <SearchIcon />
                <input
                    type="text"
                    value={SearchItem}
                    placeholder='search...'
                    onChange={(e) => { setSearchItem(e.target.value) }} />
            </form>


            {/* ------- cart & login  ------- */}

            <div className="cart">
                <Link to='/cart'><ShoppingCartOutlinedIcon /></Link>
                <span className="cart-logo">{size}</span>
            </div>


            {/* Profile ============ */}

            <div className='profile'>

                <img src={currentUser ? currentUser.photoURL : Profile_user} className='profile-img' alt="" onClick={toggleProfileAction} />
                <p className='profile-name' >{currentUser ? currentUser.displayName : ""}</p>

                <div className="profile_actions" ref={profileActionRef} onClick={toggleProfileAction}>
                    {
                        currentUser ? (<span onClick={logOut}>Logout</span>)
                            :
                            <div>
                                <Link to='/register'>SignUp </Link>
                                <br />
                                <Link to='/Login'>Login </Link>
                            </div>

                    }
                </div>
            </div>

        </header>
    )
}

export default navbar