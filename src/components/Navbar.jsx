import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import styled from "styled-components";
import autsLogo from "../assets/logo.png";
import './../index.css';


export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  const handleClickReserva = () =>{
    window.open('/reservas', '_blank');
  }
  return (
    <>
      <Nav>
        <div className="brand">

          <img src={autsLogo} className="imagemBanner" alt="Icon" />
          
          <div className="toggle">
            
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
        </div>
        <ul className="links">
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#services">Quem Somos</a>
          </li>
          {/* <li>
            <a href="#portfolio">Portifólio</a>
          </li> */}
          {/* <li>
            <a href="#testimonials">Testemunhos</a>
          </li> */}
          <li>
            <a href="#products">Cardápio</a>
          </li>
          <li>
          <a href="#reserva">
              Reserva
            </a>
          </li>
          
          <li>
            <a href="#footer">Contato</a>
          </li>
          
        </ul>
      </Nav>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <ul>
          <li>
            <a
              href="#home"
              className="active"
              onClick={() => setNavbarState(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setNavbarState(false)}>
            Quem Somos
            </a>
          </li>
          <li>
            <a href="#products" onClick={() => setNavbarState(false)}>
            Cardápio
            </a>
          </li>
          <li>
            <a href="#reserva" onClick={() => setNavbarState(false)}>
              Reserva
            </a>
          </li>

          <li>
            <a href="#footer" onClick={() => setNavbarState(false)}>Contato</a>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4vw;
  .brand {
    img {
      margin-top: 1rem;
      cursor: pointer;
    }
    .toggle {
      display: none;
    }
  }
  .links {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        color: #fc4958;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #f9c74f;
        }
      }
      .active {
        color: #f9c74f;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      top: 0;
      .toggle {
        display: block;
      }
    }
    .links {
      display: none;
    }
  }
`;
const ResponsiveNav = styled.div`
  position: fixed;
  right: -100vw;
  top: 0;
  z-index: 10;
  background-color: white;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.3s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  ul {
    list-style-type: none;
    width: 100%;
    margin-top: 3rem;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: #f9c74f;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #fc4958;
        }
      }
      &:first-of-type {
        a {
          color: #fc4958;
          font-weight: 900;
        }
      }
    }
  }
`;
