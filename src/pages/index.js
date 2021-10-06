import React from "react"
import { Link } from "gatsby"

import devpost from "../images/devpost.png"
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"

import Image from '../components/image';
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
  'C/C++', 
  'Python',
  'Bash/Shell Scripting'
  
]
const skillsRight = [
  'MATLAB',
  'Oscilloscopes',
  'PostgreSQL'
]

const workXP = [
  {
    title: "Silicon and Systems Validation Engineer",
    description: "I'm currently interning on the AP Silicon Validation team at Tesla, where I'm focusing on running power experiments and writing automation scripts to support them.",
    image: "Tesla_T.png",
    linkName: "tesla.com",
    link: "https://www.tesla.com/careers",
    tags: ["Python", "Bash", "Hardware"]
  },
  {
    title: "Firmware Team Member",
    description: "I write firmware in C and Python for the solar car student design team at the University of Waterloo, Midnight Sun. ",
    image: "midsun.jpg",
    linkName: "uwmidsun.com",
    link: "https://www.uwmidsun.com/about",
    tags: ["C", "Python"]
  },
  {
    title: "Firmware Developer",
    description: "I worked with STM32 microcontroller-based systems and tested peripherals such as Bluetooth and CAN. I also wrote some technical transition documentation, and designed Python and bash scripts to automate some firmware validation. ",
    image: "curiato.png",
    linkName: "curiato.com",
    link: "https://www.curiato.com",
    tags: ["C", "Python", "Linux", "Bash"]
  },
  {
    title: "Full Stack Developer",
    description: "I made a number of codebase improvements and created REST API endpoints in Django to support new features. I also spent some time exploring ways to implement CI/CD for the company and learning how to Dockerize our application.",
    image: "veerai.jpg",
    linkName: "veer.ai",
    link: "https://veer.ai",
    tags: ["Python (Django)", "React"]
  },
  {
    title: "Software Developer",
    description: "I worked on developing cross-platform iOS/Android applications using Flutter and Dart. I also had the opportunity to work with a UI/UX designed to prototype a app that would help students learn about and manage their credit score. ",
    // description: "TD Labs is an innovation team \"for students, by students\" that focuses on the unique financial challenges of post-secondary life. During my time there, I worked on developing cross-platform iOS/Android applications using Flutter and Dart. I also had the opportunity to work with a UI/UX designed to prototype a app that would help students learn about and manage their credit score. ",
    image: "td.png",
    linkName: "tdlab.io",
    link: "https://tdlab.io",
    tags: ["Flutter", "Firebase", "Vue.js"]
  }
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
        <p class="text-lg">I'm a 3rd-year mechatronics engineering student at the University of Waterloo. I have experience in firmware and hardware validation, and I'm currently seeking <b>internships for Spring/Summer 2022. </b></p>
        {socialLinks.map((link) => 
          <Link to={ link.url } target="_blank" rel="noreferrer">
            <img className="social-icons"
              src={ link.name } 
              align="left"
              alt="media link"
            />
          </Link>
        )}
      </div>
    </div>
    {/* <h2>Skills Overview</h2>
    <p>Some technologies I'm familiar with include:</p>
    
    <div className="flex flex-wrap justify-start my-5">
      <div class="w-full md:w-1/4 md:mr-5 my-auto">
        <ul class="list-disc">
          {skillsLeft.map((skill) =>
            <li>{ skill }</li>
          )}
        </ul>
      </div>
      <div class="w-full md:w-1/4 md:ml-0 my-auto">
        <ul class="list-disc">
          {skillsRight.map((skill) =>
            <li>{ skill }</li>
          )}
        </ul>
      </div>
    </div> */}

    <h2>Experience Overview</h2>
    <p>
      More over on my <a 
        href="https://www.linkedin.com/in/selenium-hsu"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>!
    </p>

    {workXP.map((project, index) =>
      <div class="flex flex-wrap mb-6" style={{ minHeight: '1em' }}>
        <div class="w-1/12 md:w-1/12 pr-3 mb-3">
          <Image alt={ project.title } filename={ project.image }/>
        </div>
        <div class="w-full md:w-10/12">
          <h3 class="">{ project.title } 
            {workXP[index].tags.map((tag) =>
              <span class="text-sm font-medium bg-blue-100 ml-2 mb-2 py-1 px-2 rounded text-blue-500 align-middle">{ tag }</span>
            )}    
          </h3>

          <a style={{ fontStyle: "italic" }} href={ project.link } target="_blank" rel="noreferrer">{ project.linkName }</a>
          <p class="mt-2">{ project.description }</p>
        </div>
      </div>
    )}
      
    {/*<p> When I'm not studying or working, I like spending my time running, making music, and going to hackathons. </p>*/}
    
    <br />
    
    <p style={{ color: "grey" }}>
      <i>This website is a work in progress, made using <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby, </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React, </a>
        <a href="https://graphql.org/" target="_blank" rel="noreferrer">GraphQL, </a> and 
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> Tailwind CSS. </a>
      </i>
      {/* <br />
      Source code on Github <a href="https://github.com/selinahsu/selinahsu" target="_blank" rel="noreferrer">here</a>.  */}
    </p>
  </Layout>
)

export default IndexPage
