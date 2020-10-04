import React from "react"
import { Link } from "gatsby"

import devpost from "../images/devpost.png"
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"

import Layout from "../components/layout"
import "../components/layout.css"
import Avatar from "../components/avatar"
import Image from '../components/image';
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

const featuredProjects = [
  {
    title: "Jetstream",
    description: "Jetstream is a project to calculate the carbon footprint of flying. ",
    image: "jetstream.png",
    linkName: "github.com/selinahsu/jetstream",
    link: "https://github.com/selinahsu/jetstream",
    tags: ["Express", "React"]
  },
  {
    title: "Say Soup",
    description: "Say Soup is an interactive voice app cooking assistant that makes it easy to connect with and cook with others. I worked on it with my team at Hack the 6ix 2020. We built the voice app portion using Voiceflow and Google Cloud. ",
    image: "saysoup.png",
    linkName: "devpost.com/software/say-soup",
    link: "https://devpost.com/software/say-soup",
    tags: ["Voiceflow API", "Google Cloud", "Express", "React"]
  },
  {
    title: "AisleVision",
    description: " AisleVision is a robot that scans store shelves for out-of-stock items. At Hack Western 2019, I used Python to program a Raspberry Pi to drive a chassis carrying a camera scanner. ",
    image: "aislevision.jpg",
    linkName: "devpost.com/software/aisle-vision",
    link: "https://devpost.com/software/aisle-vision",
    tags: ["Voiceflow API", "Google Cloud", "Express", "React"]
  },
  {
    title: "Vogro",
    description: "Vogro is a platform that connects volunteers to those in the community in need of help. I created their website in React and deployed it using Netlify. ",
    image: "vogro.png",
    linkName: "vogro.ca",
    link: "https://vogro.ca",
    tags: ["React"]
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
    <p class>I've had the opportunity to learn a lot about software development through my internships and my own projects! Some recent technolgies I've been working with include:</p>
    
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

    <h2>Featured Projects</h2>

    {featuredProjects.map((project, index) =>
      <div class="flex flex-wrap mb-6" style={{ minHeight: '10em' }}>
        <div class="w-8/12 md:w-3/12 mx-4 mb-4">
          <Image alt={ project.title } filename={ project.image }/>
        </div>
        <div class="w-full md:w-8/12 mx-2">
          <h3>{ project.title } 
          {featuredProjects[index].tags.map((tag) =>
            <span class="text-sm font-medium bg-green-100 py-1 px-2 rounded text-green-500 align-middle">{ tag }</span>
          )}    
          </h3>

          <a href={ project.link } target="_blank">{ project.linkName }</a>
          <p class="mt-3">{ project.description }</p>
        </div>
      </div>
    )}
    
    <p><i>This website is a work in progress, made using <a href="https://www.gatsbyjs.com/" target="_blank">Gatsby, </a>
      <a href="https://reactjs.org/" target="_blank">React, </a>
      <a href="https://graphql.org/" target="_blank">GraphQL, </a> and 
      <a href="https://tailwindcss.com/" target="_blank"> Tailwind CSS. </a>
    </i></p>
  </Layout>
)

export default IndexPage
