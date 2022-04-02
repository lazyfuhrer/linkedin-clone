import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1648916785~hmac=018ec082c2fd13c3bf4248f950812e6d" alt=""/>

            <div className='header-search'>
                <SearchIcon/>
                <input type="text"/>
            </div>
        </div>

        <div className='header__right'>
            <HeaderOption title="Home"/>
            <HeaderOption />
        </div>
    </div>
  );
}

export default Header