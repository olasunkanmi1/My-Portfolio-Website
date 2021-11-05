import React from 'react'

const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'midnightblue',
    height: '3rem',
    width: '100vw',
    maxWidth: '100%',
    padding: '0 1rem',
    position: 'sticky',
    top: '0',
    borderBottom: '3px solid #ff4d37',
    zIndex: '5000'
}

const homelinkStyle ={
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const logoStyle = {
    width: '40px'
}


const navlistStyle = {
    display: 'flex',
    listStyle: 'none',
    position: 'absolute',
    top: '2.8rem',
    left: '0',
    width: '100vw',
    overflowX: 'hidden',
    height: '17rem',
    padding: '1rem 0',
    backgroundColor: 'midnightblue',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    transform: 'translateX(-100%)',
    transition: '0.5s',
}

const navitemStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '15%',
}

const navlinkStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1rem',
    letterSpacing: '4px',
    transition: 'color 0.5s',
    textDecoration: 'none',
    height: '100%',
    width: '100%',
    transition: '0.5s',
    zIndex: '5000',
}

const menutoggleStyle = {
    height: '100%',
    width: '2.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '1.8rem',
    position: 'absolute',
    right: '1rem',
    cursor: 'pointer',
    zIndex: '1500',
}

const rmvStyle = {
    display: 'flex',
    width: '80%',
    height: '3px',
    backgroundColor: '#fff',
}

toggle() {
    const toggle = document.getElementById('toggle');
    const sidebar = document.getElementById('sidebar');
    const rmv =  document.getElementById('rmv');


    toggle.classList.toggle('active'); 
    sidebar.classList.toggle('active');
    rmv.classList.toggle('active');
}

function Header() {
    return (
        <nav style={navStyle}>
            <a href='./Home' style={homelinkStyle}>
                <img src='./images/oa.png' alt='logo' style={logoStyle} />
            </a>

            <ul className="nav-list" id="sidebar" style={navlistStyle}>
                <li className="nav-item" style={navitemStyle}>
                    <a href="#home" className="nav-link navbar_link--active" style={navlinkStyle}>HOME</a>
                </li>
                <li className="nav-item" style={navitemStyle}>
                    <a href="#about" className="nav-link" style={navlinkStyle}>ABOUT</a>
                </li>

                <li className="nav-item" style={navitemStyle}>
                    <a href="#skills" className="nav-link" style={navlinkStyle}>SKILLS</a>
                </li>
          
                <li className="nav-item" style={navitemStyle}>
                    <a href="#portfolio" className="nav-link" style={navlinkStyle}>PORTFOLIO</a>
                </li>

                <li className="nav-item" style={navitemStyle}>
                    <a href="#contact" className="nav-link" style={navlinkStyle}>CONTACT</a>
                </li>
            </ul>

            <div className="menu-toggle" id="toggle" style={menutoggleStyle} onClick={() => toggle()}>
                <div id="rmv" style={rmvStyle}></div>
            </div>
        </nav>
    )
}

export default Header
