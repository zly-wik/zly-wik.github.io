import React from 'react'

import { TbBrandDjango } from 'react-icons/tb'
import { BiGitBranch } from 'react-icons/bi'
import { TbBrandPython } from 'react-icons/tb'
import { BiCode } from 'react-icons/bi'
import { FaLaptopCode } from 'react-icons/fa'
import { MdHttp } from 'react-icons/md'

export default function Home() {
    return (
        <div className='single-page'>
            <div className='home-title-block'>
                <h1 className='title-header'>Wiktor Bader</h1>
                <h2 className='subtitle-header'>Python Backend Developer</h2>
            </div>
            <div className='home-icons-container'>
                <div className='home-icon-block'>
                    <BiCode size={200} className='home-icon' />
                    <div className='home-icon-text'>Programming</div>
                </div>
                <div className='home-icon-block'>
                    <TbBrandPython size={200} className='home-icon' />
                    <div className='home-icon-text'>Python (OOP)</div>
                </div>
                <div className='home-icon-block'>
                    <TbBrandDjango size={200} className='home-icon' />
                    <div className='home-icon-text'>Django, DRF</div>
                </div>
                <div className='home-icon-block'>
                    <BiGitBranch size={200} className='home-icon' />
                    <div className='home-icon-text'>Git & GitHub</div>
                </div>
                <div className='home-icon-block'>
                    <MdHttp size={200} className='home-icon' />
                    <div className='home-icon-text'>Web apps</div>
                </div>
                <div className='home-icon-block'>
                    <FaLaptopCode size={400} className='home-icon' />
                    <div className='home-icon-text'>and much more...</div>
                </div>
            </div>
        </div>
    )
}
