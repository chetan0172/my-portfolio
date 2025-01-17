import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile_img' />
      <h1><span>I'm Chetan K,</span> frontend developer based in India.</h1>
      <p>I am a frontend developer from , India with 2+ years of experience in multiple companies like iGate, Nexsellers, Dusane Infotech and RChilli Inc.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
