import React from 'react'

import { PhoneAndroid } from '@mui/icons-material'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'

export default function Contact() {
  return (
    <div className='single-page'>
        <div className='home-title-block'>
            <h1 className='title-header'>Contact</h1>
        </div>
        <div className='contact-container'>
            <div className='contact-icon-block'>
                <PhoneAndroid size={200} className='home-icon' />
                <div className='contact-icon-text'>+48 793 811 364</div>
            </div>
            <div className='contact-icon-block'>
                <Email size={200} className='home-icon' />
                <div className='contact-icon-text' style={{fontSize: "1rem"}}>wiktor.dlugi.bader@gmail.com</div>
            </div>
            <br />
            <hr />
            My profiles
            <div className='contact-icon-block'>
                <a href='https://www.linkedin.com/in/zlywik/' rel='noreferrer' target='_blank'>
                    <LinkedIn size={200} className='home-icon' />
                    <div className='contact-icon-text'>
                        /zlywik
                    </div>
                </a>
            </div>
            <div className='contact-icon-block'>
                <a href='https://github.com/zly-wik' rel='noreferrer' target='_blank'>
                    <GitHub size={200} className='home-icon' />
                    <div className='contact-icon-text'>
                        /zly-wik
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}
