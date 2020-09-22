import React, { useState } from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import mylogo from "../images/mylogo.png"

import "./layout.css";

const LogoWrap = styled.div`
  margin-right: 0;
  margin-top: 1.5em;
  flex: 0 1 45px;
`

const Navigation = styled.nav`
  height: 5em;
  display: flex;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: none;
  margin: 0 auto;
  padding: 0 2em;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    height: 5em;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 2em;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 15vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: absolute;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

// const Logo = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       file(name: { eq: "mylogo" }, extension: { eq: "png" }) {
//         childImageSharp {
//           fluid(maxWidth: 50, pngQuality: 80) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <LogoWrap as={Link} to="/">
//       <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
//     </LogoWrap>
//   )
// }

const navPages = [
  {
		name: "Home", 
		path: "/"
  },{
		name: "Projects", 
		path: "/projects"
  },
  {
		name: "Contact", 
		path: "/contact"
  },
];

const NavbarLinks = () => {
  return (
    <div class="flex justify-between">
      {navPages.map((page) => (
        <div className="mt-4 ml-10">
          <Link to={ page.path } className="no-underline">
            { page.name }
          </Link>
        </div>
      ))}
    </div>
  )
}

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <LogoWrap as={Link} to="/">
        <img src={mylogo} />
      </LogoWrap>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar
