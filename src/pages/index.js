import React from "react"
import { Link } from "gatsby"

import devpost from "../images/devpost.png"
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"

import Layout from "../components/layout"
import "../components/layout.css"
import Avatar from "../components/avatar"
import SEO from "../components/seo"

const socialLinks = [
  {
    name: github,
    url: "https://github.com/selinahsu"
  },
  {
    name: devpost,
    url: "https://devpost.com/selenium"
  },
  {
    name: linkedin,
    url: "https://www.linkedin.com/in/selenium-hsu"
  }
];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div className="flex flex-wrap justify-between my-10">
        <div class="sm:w-3/12 my-auto">
          <Avatar className="avatar"/>
        </div>
        <div className="w-full sm:w-8/12 my-auto">
          <h1 className="text-700">Hi there!</h1>
          <p class="text-xl">My name is Selina and I'm currently a 3rd-year student studying Mechatronics Engineering at the University of Waterloo. </p>
          {socialLinks.map((link) => 
            <a href={ link.url } target="_blank">
              <img className="social-icons"
                src={ link.name } 
                align="left"
                alt="media link"
              />
            </a>
          )}
        </div>
      </div>
      <h3 className="text-xl">About Me</h3>

      <p class="text-xl">This website is a work in progress, made using Gatsby, React, GraphQL,and Tailwind CSS. </p>

      <h3 className="text-xl">Here are some of the things that I do: </h3>
      <Link to="/projects"><p className="font-bold">Code</p></Link>
  </Layout>
)

export default IndexPage
