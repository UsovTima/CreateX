import React from "react"

function Header() {

  return (
    <header className="mainheader">
        <nav className="header__nav">
            <div className="header__logo">
                <img src="#" alt="logo" />
            </div>
            <ul className="nav__ul">
                <li className="nav__li"><a href="#" className="nav__links">About Us</a></li>
                <li className="nav__li"><a href="#" className="nav__links">Courses</a></li>
                <li className="nav__li"><a href="#" className="nav__links">Events</a></li>
                <li className="nav__li"><a href="#" className="nav__links">Blog</a></li>
                <li className="nav__li"><a href="#" className="nav__links">Contacts</a></li>
            </ul>
            <div className="nav__group-button">
                <button className="consultaion"><a href="#">Get consultation</a></button>
                <button className="registration"><a href="#">Log in / Register</a></button>
            </div>
        </nav>
    </header>
  )
}

export default Header;
