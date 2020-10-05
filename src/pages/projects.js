import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "../components/layout.css"
import Image from '../components/image';
import SEO from "../components/seo"

const featuredProjects = [
  {
    title: "Jetstream",
    description: "Jetstream is a project that draws attention to the environmental impact of flying. It's a tool that calculates the carbon emissions of taking a passenger flight and encourages people to work towards offsetting it. ",
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
    title: "Sprout",
    description: "Sprout is mobile app to help first-time credit users build a better credit score. It was a concept I developed alongside a product designer during my internship at the TD Innovation Lab. ",
    image: "sprout.png",
    linkName: "github.com/selinahsu/sprout",
    link: "https://github.com/selinahsu/sprout",
    tags: ["Flutter"]
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

const Work = () => (
  <Layout>
    <SEO title="Featured Projects" />
    <h2>Featured Projects</h2>
    <p>Here are some programming projects that I've worked on: </p>

    {featuredProjects.map((project, index) =>
      <div class="flex flex-wrap mb-6" style={{ minHeight: '10em' }}>
        <div class="w-8/12 md:w-3/12 mx-4 mb-4">
          <Image alt={ project.title } filename={ project.image }/>
        </div>
        <div class="w-full md:w-8/12 mx-2">
          <h3 class="mb-2">{ project.title } 
            {featuredProjects[index].tags.map((tag) =>
              <span class="text-sm font-medium bg-blue-100 ml-2 mb-2 py-1 px-2 rounded text-blue-500 align-middle">{ tag }</span>
            )}    
          </h3>

          <a style={{ fontStyle: "italic" }} href={ project.link } target="_blank" rel="noreferrer">{ project.linkName }</a>
          <p class="mt-3">{ project.description }</p>
        </div>
      </div>
    )}

    
  </Layout>
)

export default Work
