import React from 'react'
import './header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import { IconButton, Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { logOut, selectUser } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase';

const Header = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = ()=>{
        auth.signOut().then(()=>{
            dispatch(logOut());
            
        })
    }
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Emblem.png"
                        className=""
                        alt="logo"
                />
            </div>
            <div className="header__middle">
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <input type="text" className="" placeholder="Search for Messages" />
                <IconButton>
                    <TuneIcon/>
                </IconButton>
            </div>
            <div className="header__right">
                <IconButton>
                    <HelpOutlineIcon/>
                </IconButton>
                <IconButton>
                    <SettingsIcon/>
                </IconButton>
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton >
                    <Avatar onClick={signOut} src={user.photoUrl}/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header
