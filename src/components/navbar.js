import React, { useState } from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import mylogo from "../images/mylogo.png"

import "./navbar.css";

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  margin: 0 2em;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 1em;
    background-color: #fff;
    transition: none;
    top: 7em;
    left: ${props => (props.open ? "-150%" : "0")};
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
  },
  {
		name: "Projects", 
		path: "/projects"
  },
  {
		name: "Fun Stuff", 
		path: "/misc"
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
        <div className="navbarlinks mt-4 ml-10">
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
    <div className="navigation">
      <div className="logo-wrap">
        <Link to="/">
          <img src={mylogo} alt="logo" height="auto" width="50"/>
        </Link>
      </div>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox> {/* small screen appearance */}
            {navPages.map((page) => (
              <div className="mt-4 ml-10">
                <Link to={ page.path } className="no-underline">
                  { page.name }
                </Link>
              </div>
            ))}
        </Navbox>
      ) : (
        <Navbox open> {/* desktop appearance */}
          <NavbarLinks />
        </Navbox>
      )}
    </div>
  )
}

export default Navbar
