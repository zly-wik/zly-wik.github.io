import React from 'react'
import PortraitPhoto from '../assets/portrait-photo.png'

export default function About() {
  return (
    <div className='single-page'>
        <div className='about-title-block'>
            <h1 className='title-header'>About me</h1>
        </div>
        <div className='about-block'>
            <img src={PortraitPhoto} alt='portrait' className='about-image'/>
            <div className='about-text'>
                I am Wiktor, a passionate programmer,
                historical fencing and archery enthusiast,
                hand craft lover,guitarist, hiker and scout.
                I am seeking for new opportunities
                to contribute to Your company
                as Python Engineer.
                <br /><br />
                I am an experienced Backend Developer,
                with knowlegde of Django, Django REST Framework,
                PyTest, authentication, design patterns, best coding practices
                <br /><br />
                Combined with soft skills like: proactive approach,
                very technical mindset, and excellent self-organization,
                I could offer Your company my skills and experience,
                which will impact on Your team productivity.
            </div>
        </div>
    </div>
  )
}
