import React, { useState } from "react"
import links from "../data/links"
import styled from "styled-components"
import Logo from "../images/website_logo_transparent_background.webp"
import { Link } from "gatsby"
import '../styles/nav.css'

const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <NavStyles>
      <div className="masthead flex-container">
      <Link className="nav-link"  to="/">
        <img src={Logo} alt="Logo" />
      </Link>
        <button
          className={isOpen ? "toggle-btn toggle-btn-active" : "toggle-btn"}
          type="button"
          onClick={toggleNav}
          aria-label="Menu Button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
        {links.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.path}>{item.text}</a>
            </li>
          )
        })}
      </ul>
    </NavStyles>
  )
}

export const NavStyles = styled.nav`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
  height: 15vh;
  

  .masthead {
    z-index: 3;
    width: 100%;
    display: flex;
    justify-content: space-between;

    img {
      width: 4rem;
      

      @media (min-width: 768px) {
        width: 100px;
      }

      @media (min-width: 1024px) {
        position: absolute;
        top: 15px;
      }

      @media (min-width: 1200px) {
        width: 120px;
      }
    }
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    text-align: center;
    background: -webkit-linear-gradient(185deg, rgba(28,181,224,1) 0%, rgba(0,0,70,1) 35%);  /* Chrome 10-25, Safari 5.1-6 */
    background: rgb(28,181,224);
    background: linear-gradient(185deg, rgba(28,181,224,1) 0%, rgba(0,0,70,1) 55%); 
    margin: 0;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateX(100%);
    transition: 0.3s ease-in;
    list-style: none;
    padding-left: 0;

    li {
      list-style: none;
      font-size: 1.25rem;
      font-weight: 400;
      margin-left: 0;
      padding: 0.75rem 0;
      a {
        text-decoration: none;
        text-transform: capitalize;
        color: hsla(0, 5%, 96%, 0.8);
        transition: 0.3s;

        &.active {
          color: #e609b5;
        }
      }
      &:hover {
        cursor: pointer;
        a {
          color: #e609b5;
        }
      }
    }

    &.show-nav {
      transform: translateX(0%);
    }
  }

  .toggle-btn {
    width: 40px;
    height: 40px;
    padding: 5px;
    background-color: transparent;
    border: none;
    margin-right: 20px;
    margin-top: 0px;

    span {
      display: block;
      width: 30px;
      height: 2px;
      background-color: hsla(0, 5%, 96%, 0.8);
      transition: 0.2s ease-in;

      &:nth-child(1) {
        transform: translateY(-5px);
      }

      &:nth-child(3) {
        transform: translateY(5px);
      }
    }

    &.toggle-btn-active {
      span {
        &:nth-child(1) {
          transform: translateY(2px) rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
          transform: translateX(-100%);
        }

        &:nth-child(3) {
          transform: translateY(-2px) rotate(-45deg);
        }
      }
    }
  }

  @media (min-width: 992px) {
    .masthead {
      flex-direction: column;
      justify-content: center;
    }

    .toggle-btn {
      display: none;
    }

    .nav-links {
      background: transparent;
      flex-direction: row;
      margin-left: auto;
      position: relative;
      transform: translateX(0);
      transition: none;
      width: 600px;

      li {
        margin-left: 1rem;
        width: 100px;
      }
    }
  }
`

export default Navbar
