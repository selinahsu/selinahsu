import React from "react"
import fermi from "../images/fermi.gif"
import Layout from "../components/layout"
import "../components/layout.css"
import SEO from "../components/seo"

const miscItems = [
  {
    title: "My Art",
    description: "I attended a visual arts program in high school called CyberARTS. My portfolio is up on my <a href=\"https://selinahsu.github.io/visual-art.html\" target=\"_blank\" rel=\"noopener noreferrer\">old website</a> (sadly not mobile-friendly). ",
    linkName: "selinahsu.github.io",
    link: "https://selinahsu.github.io/visual-art.html",
    image: fermi,
    alt: "Fermi's Paradox GIF",
    style: { width: "auto", height: "30em" }
  }
];

const musicVideos = [
  {
    title: "The Second I'm Rich",
    url: "https://youtube.com/embed/-uvjCU8-Pl8"
  },
  {
    title: "The Seed",
    url: "https://www.youtube.com/embed/sZdqhRCrK4M"
  },
  {
    title: "You",
    url: "https://youtube.com/embed/j9C9WWJgnyc"
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
    <p>Here are some other things that I do! </p>

    <h2 style={{ marginBottom: 0 }}>A Cappella</h2>
    <p style={{ marginTop: "0.5em" }}>I sang a cappella groups when I was in university, and produced a cappella cover videos during the COVID19 pandemic.</p>
        
    {musicVideos.map((video, index) => (
      <div className="video" key={index}>
        <iframe
          className="video-iframe"
          title={video.title}
          src={video.url}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    ))}

    {miscItems.map((item, index) => (
      <div key={index}>
        <h2 style={{ marginBottom: 0 }}>{item.title}</h2>
        <a href={item.link} target="_blank" rel="noreferrer">{item.linkName}</a>
        <p style={{ marginTop: "0.5em" }} dangerouslySetInnerHTML={{ __html: item.description }} />
        <img src={item.image} alt={item.alt} style={item.style} />
      </div>
    ))}
  </Layout>
)

export default Misc