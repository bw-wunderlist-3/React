import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../images/Wunderlist_Logo.png'

const Header = styled.header`
display: flex;
justify-content: space-between;
background-color: #594A4E;
font-size: 1.5rem;
color: white;

nav{
    margin:2%;
    width:30%;
}
.link{
    color:white;
    text-decoration:none;
    &:hover{
        color:#F44E31;
    }
}

.navspan{
    margin:3%;
    border-right: 2px solid white;
}

img{
    height: 12vh;
}
`



const NavBar = () => {


    return (
        <Header>
        <img src={logo} alt="Wunderlist Logo"></img>
        <nav>
            <a className="link" href="https://wunderlist-lambda.netlify.app/index.html">Home</a>
            <span className="navspan"></span>
            <Link className="link" to="/login">Login</Link>
            <span className="navspan"></span>
            <Link className="link" to="/register">Sign Up</Link>
        </nav>
        </Header>
    )

}

export default NavBar