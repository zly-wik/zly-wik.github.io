import React from 'react'

import { TbBrandDjango } from 'react-icons/tb'
import { BiGitBranch } from 'react-icons/bi'
import { TbBrandPython } from 'react-icons/tb'
import { BiCode } from 'react-icons/bi'
import { FaLaptopCode } from 'react-icons/fa'
import { MdHttp } from 'react-icons/md'

export default function Home() {
    return (
        <div className='home-page'>
            <div className='home-title-block'>
                <h1 className='title-header'>Wiktor Bader</h1>
                <h2 className='subtitle-header'>Python Backend Developer</h2>
            </div>
            <div className='home-icons-container'>
                <BiCode size={200} className='home-icon' />
                <TbBrandPython size={200} className='home-icon' />
                <TbBrandDjango size={200} className='home-icon' />
                <BiGitBranch size={200} className='home-icon' />
                <MdHttp size={200} className='home-icon' />
                <FaLaptopCode size={400} className='home-icon' />
            </div>
        </div>
    )
}
