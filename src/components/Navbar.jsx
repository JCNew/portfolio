import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { NavbarData } from './NavbarData';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
  return <>
   {/* TOP BAR */}
   <IconContext.Provider value={{color: '#000'}}>
<div className="navbar">
    <button className='menu__bars'>
<FaIcons.FaBars onClick={showSidebar}/>
    </button>
    <Link to="/" className='menu__title'>
        Algorythmic <FaIcons.FaCodepen />
    </Link>
</div>
   {/*SIDE BAR */}
<nav className={sidebar ? 'nav__menu nav__menu--active': 'nav__menu'}>
    <ul className="nav__menu__items" onClick={showSidebar}>
        <li className="navbar--toggle">
        <button className='menu__bars'>
            <AiIcons.AiOutlineClose />
          </button>
        </li>
        {NavbarData.map((item, index) => {
    return (
        <li key={index} className="nav__item">
            <Link to={item.path}>{item.icon}<span>{item.title}</span></Link>
        </li>
    )
})}
    </ul>
</nav>

</IconContext.Provider>
  </>;
}

export default Navbar;


