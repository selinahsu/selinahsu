import React from "react"

import Layout from "../components/layout"
import "../components/layout.css"
import SEO from "../components/seo"

const miscItems = [
  {
    title: "Art",
    description: "I attended an arts and design program in high school called CyberARTS. I really learned a lot there and it kicked off my interest in engineering. You can see some of my portfolio at my old website (not mobile-friendly). ",
    linkName: "selinahsu.github.io",
    link: "https://selinahsu.github.io/visual-art.html"
  },
  {
    title: "Engineering Ambassadors",
    description: "If you or someone you know is in high school and is interested in talking to a current Waterloo engineering student, we are still running EngChats online! Even though open houses aren't happening. ",
    linkName: "uwaterloo.ca/engineering-student-ambassadors",
    link: "https://uwaterloo.ca/engineering-student-ambassadors/"
  },
  {
    title: "MATES",
    description: "MATES (Mentor Assistance Through Education and Support) is a one-to-one student peer support program offered by the Waterloo Undergraduate Student Association. MATES volunteers are trained in providing support to students who are hoping to build social skills, or are experiencing personal or academic concerns or low-level mental health and wellness difficulties. ",
    linkName: "wusa.ca/services/uw-mates",
    link: "https://wusa.ca/services/uw-mates"
  }
];

const Misc = () => (
  <Layout>
    <SEO title="Miscellaneous" />
    <h1>Miscellaneous</h1>
    <p>Here are some other things that I do when I'm not working or studying: </p>

    {miscItems.map(item => 
      <>
        <h2 style={{ marginBottom: 0 }}>{ item.title }</h2>
        <a href={ item.link } target="_blank">{ item.linkName }</a>
        <p style={{ marginTop: "0.5em" }}>{ item.description }</p>
      </>
    )}
  </Layout>
)

export default Misc
