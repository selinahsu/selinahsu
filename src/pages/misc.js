import React from "react"

import fermi from "../images/fermi.gif"
import Layout from "../components/layout"
import "../components/layout.css"
import SEO from "../components/seo"

const miscItems = [
  {
    title: "My Art",
    description: "I attended an arts and design program in high school called CyberARTS. I really learned a lot there and it kicked off my interest in engineering. You can see some of my portfolio at my old website (sadly not mobile-friendly). ",
    linkName: "selinahsu.github.io",
    link: "https://selinahsu.github.io/visual-art.html",
    image: fermi,
    alt: "Fermi's Paradox GIF",
    style: { width: "auto", height: "30em" }
  },
  {
    title: "Engineering Ambassadors",
    description: "If you or someone you know is in high school and is interested in talking to a current Waterloo engineering student, we are still running EngChats online! Even though open houses aren't happening. ",
    linkName: "uwaterloo.ca/engineering-student-ambassadors",
    link: "https://uwaterloo.ca/engineering-student-ambassadors/"
  },
  {
    title: "MATES Peer Support",
    description: "MATES (Mentor Assistance Through Education and Support) is a one-to-one student peer support program offered by the Waterloo Undergraduate Student Association. MATES volunteers are trained in providing support to students who are hoping to build social skills, or are experiencing personal or academic concerns or low-level mental health and wellness difficulties. ",
    linkName: "wusa.ca/services/uw-mates",
    link: "https://wusa.ca/services/uw-mates"
  }
];

const musicVideos = [
  {
    title: "The Seed",
    url: "https://www.youtube.com/embed/sZdqhRCrK4M"
  },
  {
    title: "Waving Through a Zoom Call",
    url: "https://www.youtube.com/embed/jwBeP0QVTE0"
  },
  {
    title: "Wings",
    url: "https://www.youtube.com/embed/idh0Oxu0BHo"
  }
]

const Misc = () => (
  <Layout>
    <SEO title="Fun Stuff" />
    <h1>Fun Stuff</h1>
    <p>Here are some other things that I do when I'm not working or studying: </p>

    <h2 style={{ marginBottom: 0 }}>A Cappella</h2>
        
        <p style={{ marginTop: "0.5em" }}>I sing in the UW A Cappella Club! We've been producing a cappella cover videos over the past year, and I've been learning to do a lot of audio editing too. </p>
        
        {musicVideos.map(video => 
          <div className="video">
            <iframe
              className="video-iframe"
              title={ video.title }
              src={ video.url }
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
        )}

    {miscItems.map(item => 
      <>
        <h2 style={{ marginBottom: 0 }}>{ item.title }</h2>
        <a href={ item.link } target="_blank" rel="noreferrer">{ item.linkName }</a>
        <p style={{ marginTop: "0.5em" }}>{ item.description }</p>
        <img src={ item.image } alt={ item.alt } style={ item.style }/>
      </>
    )}
  </Layout>
)

export default Misc
