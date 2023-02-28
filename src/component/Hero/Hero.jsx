import React from 'react'
import Header from '../Header/Header'
import '../Hero/Hero.css'
import Heart from '../../assets/heart.png'
import Hero_image from '../../assets/hero_image.png'
import Hero_image_back from '../../assets/hero_image_back.png'
import Calories from '../../assets/calories.png'
import { motion } from "framer-motion"


export default function Hero() {
  const transition = {type: 'spring' , duration: 3}
  const mobile = window.innerWidth<=768 ? true : false;
  return (
    <div className='hero'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
        <motion.div initial={{left:mobile?'165px' : '238px' }}
          whileInView ={{left:'8px'}}
          transition={{...transition,type:'tween'}}
        >

        </motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>in here we will help you to shape and build your ideal body and live up your life to fullest</span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>+ 140</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+ 978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <div className="btn">Get Started</div>
          <div className="btn">Learn More</div>
        </div>
      </div>
      <div className="right-h">
        <button className='btn'>Join Now</button>

        <motion.div transition={transition}
        initial={{right:'-1rem' }}
        whileInView={{right:'4rem'}}
         className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={Hero_image} alt="" className='hero-image' />
        <motion.img
        transition={transition}
        initial={{right:'11rem' }}
        whileInView={{right:'20rem'}}
        src={Hero_image_back} alt="" className='hero-image-back' />

        {/* calories */}
        <motion.div
        transition={transition}
        initial={{right:'37rem' }}
        whileInView={{right:'28rem'}}
         className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>

        </motion.div>

      </div>
    </div>
  )
}
