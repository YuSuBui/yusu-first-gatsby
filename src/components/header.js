import React, { useRef } from 'react';
import { Menu } from 'primereact/menu';
import { Link } from "gatsby"
import "./styles/header.scss"

const Header = () => {
  const menu = useRef(null);
  const items = [
    { label: 'Input controls', icon: 'pi pi-fw pi-plus' },
    { label: 'Dropdown', icon: 'pi pi-fw pi-trash' }
  ];
  return <>
    <nav className="header-nav">
      <Link to="/" className="brand-nav-link">Home</Link>
      <div className="nav-menu">
        <Link to="/" className="brand-nav-link" onClick={(event) => menu.current.toggle(event)}>
            <Menu model={items} popup ref={menu} id="popup_menu" className='menu-popup'/>
            Forms
        </Link>
        <Link to="/" className="brand-nav-link">Item-2</Link>
        <Link to="/" className="brand-nav-link">Item-3</Link>
      </div>
      <div className="nav-btn">
        <Link to="/sign-in" className="nav-btn-link">Sign in</Link>
      </div>
    </nav>
  </>
}

export default Header