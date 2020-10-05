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

const skillsLeft = [
  'React.js', 
  'Node.js', 
  'PostgreSQL', 
  'MongoDB'
]
const skillsRight = [
  'Django', 
  'Flutter / Dart', 
  'Vue.js', 
  'Firebase'
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="flex flex-wrap justify-between my-10">
      <div class="sm:w-3/12 my-auto">
        <Avatar className="avatar"/>
      </div>
      <div className="w-full sm:w-8/12 my-auto">
        <h1 className="text-700">Hi there! I'm Selina. </h1>
        <p class="text-lg">I'm a 3rd-year engineering student with experience in full-stack and mobile cross-platform development. 
          I study at the University of Waterloo and I'm currently seeking <b>internships for Summer 2021. </b></p>
        {socialLinks.map((link) => 
          <Link to={ link.url } target="_blank">
            <img className="social-icons"
              src={ link.name } 
              align="left"
              alt="media link"
            />
          </Link>
        )}
      </div>
    </div>
    <h2>Skills Overview</h2>
    <p>I've had the opportunity to learn a lot about software development through my internships and my own projects! Some recent technolgies I've been working with include:</p>
    
    <div className="flex flex-wrap justify-start my-5">
      <div class="sm:w-1/3 md:w-1/4 my-auto">
        <ul class="list-disc">
          {skillsLeft.map((skill) =>
            <li>{ skill }</li>
          )}
        </ul>
      </div>
      <div class="w-1/3 md:w-1/4 ml-5 md:ml-0 my-auto">
        <ul class="list-disc">
          {skillsRight.map((skill) =>
            <li>{ skill }</li>
          )}
        </ul>
      </div>
    </div>

    {/*<p> When I'm not studying or working, I like spending my time running, making music, and going to hackathons. </p>*/}
    
    <p><i>This website is a work in progress, made using <a href="https://www.gatsbyjs.com/" target="_blank">Gatsby, </a>
      <a href="https://reactjs.org/" target="_blank">React, </a>
      <a href="https://graphql.org/" target="_blank">GraphQL, </a> and 
      <a href="https://tailwindcss.com/" target="_blank"> Tailwind CSS. </a>
    </i></p>
  </Layout>
)

export default IndexPage
