import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>"Hi there! 👋 I'm Chetan k, a passionate Frontend Developer who transforms ideas into interactive, visually stunning, and user-friendly web applications. With a deep love for clean code and seamless design, I specialize in creating digital experiences that captivate users and solve real-world problems.

When I’m not building sleek user interfaces, you’ll find me exploring the latest design trends, experimenting with new frameworks, or tweaking animations to perfection.

I believe in the magic of combining aesthetics with functionality. Whether it's designing a complex dashboard or a minimalistic portfolio, I bring creativity, attention to detail, and a user-first approach to every project.

Let’s build something amazing together! 🚀"
</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Typescript</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>DevOps</p><hr style={{width:"70%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>12+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
