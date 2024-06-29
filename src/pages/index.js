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
    title: "Application Engineer",
    description: "I joined the Cadence new college graduate rotational program, where I completed two 6-month rotations on different teams. My first rotation was on a digital implementation team, where I worked on physical design flows using Cadence Flowtool and Innovus. My second rotation was on a verification team, where I developed a UVM testbench based off existing directed tests. After the rotations, I joined the verification team full-time.",
    image: "cadence_square.png",
    linkName: "Cadence Design Systems",
    link: "https://www.cadence.com",
    tags: ["SystemVerilog", "UVM", "Xcelium", "Tcl", "Python"]
  },
  {
    title: "Hardware Software Integration Engineer",
    description: "I worked on a team responsible for the integration of hardware subsystems on the Zoox vehicle platform. I worked cross-functionally with ECU development teams to build the initial prototype of an end-of-line firmware flashing station. ",
    image: "zoox.jpg",
    linkName: "Zoox",
    link: "https://www.zoox.com",
    tags: ["Python", "Bash"]
  },
  {
    title: "Silicon and Systems Validation Engineer",
    description: "I ran power experiments to ensure the performance and reliability of binned silicon lots. I also built automation tools to execute high-volume post-silicon validation tests for custom SoCs.",
    image: "Tesla_T.png",
    linkName: "Tesla",
    link: "https://www.tesla.com",
    tags: ["Python", "Bash"]
  },
  {
    title: "Firmware Developer",
    description: "I worked with STM32 microcontroller-based systems and tested peripherals such as Bluetooth and CAN. I also wrote technical documentation, and designed Python and bash scripts to automate firmware validation. ",
    image: "curiato.png",
    linkName: "Curiato (Startup)",
    link: "https://www.linkedin.com/company/curiato",
    tags: ["C", "Python", "Bash"]
  },
  {
    title: "Full Stack Developer",
    description: "I made a number of codebase improvements and created REST API endpoints in Django to support new features. I also spent some time exploring ways to implement CI/CD for the company and learning how to Dockerize our application.",
    image: "veerai.jpg",
    linkName: "Veer AI (Startup)",
    link: "https://www.linkedin.com/company/veer-ai",
    tags: ["Python", "Django", "Javascript", "React"]
  },
  {
    title: "Software Developer",
    description: "I developed cross-platform iOS/Android mobile apps using Flutter and Dart. I also collaborated with UI/UX designers to prototype an app to help students understand and manage their credit score. ",
    image: "td.png",
    linkName: "TD Labs",
    link: "https://medium.com/td-lab",
    tags: ["Flutter", "Dart", "Firebase", "Vue.js"]
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
        <p class="text-lg">I'm currently working in the Bay Area as a DV application engineer at Cadence. Before that, I graduated from the University of Waterloo with a bachelor's degree in mechatronics engineering.</p>
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
    {/* <p>
      More over on my <a 
        href="https://www.linkedin.com/in/selenium-hsu"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>!
    </p> */}

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
