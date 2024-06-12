import React from 'react'
import PortraitPhoto from '../assets/portrait-photo.png'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function About() {
  const [paragraph, setParagraph] = React.useState(1);

  const handleParagraphChange = (newParagraph) => {
      console.log(newParagraph)
      setParagraph(newParagraph);
  };
  return (
    <div className='single-page'>
        <div className='about-title-block'>
            <h1 className='title-header'>About me</h1>
        </div>

        <div className='about-block small-screens-only'>
          <img src={PortraitPhoto} alt='portrait' className='about-image'/>
          <div className='skills-toggle-buttons-group' value={paragraph}>
            <div className={paragraph === 1 ? 'skills-toggle-button disabled' : 'skills-toggle-button'} onClick={paragraph === 1 ? null : () => handleParagraphChange(paragraph-1)}>
              <ArrowBackIcon size={100} />
            </div>
            <div className={paragraph === 3 ? 'skills-toggle-button disabled' : 'skills-toggle-button'} onClick={paragraph === 3 ? null : () => handleParagraphChange(paragraph+1)}>
              <ArrowForwardIcon size={100} />
            </div>
          </div>
          <div className='about-text'>
            <hr/>
            {paragraph === 1 ?
            <>As a Python Developer passionate about backend development, I'm dedicated to crafting robust, efficient, and scalable solutions. My expertise includes Python, Django, and the Django REST Framework, focusing on building RESTful APIs for seamless interactions. I am proficient in database management with PostgreSQL, ensuring data integrity and performance.</>
            : null}
            {paragraph === 2 ?
            <>My journey in software development is marked by a constant pursuit of improvement. I adhere to clean coding principles, emphasizing critical concepts like SOLID, DRY, and KISS. My enthusiasm for learning new technologies and methodologies is a driving force. My familiarity with Linux, Docker, and Git empowers me to streamline workflows and collaborate effectively.</>
            : null}
            {paragraph === 3 ?
            <>Outside of work, I maintain a healthy work-life balance by engaging in a diverse range of activities. I enjoy staying active, from trekking and cycling to archery and sling shooting. Additionally, I indulge my creative side through woodworking, bow making, and the occasional poetry writing.</>
            : null}
          </div>
        </div>

        <div className='about-block big-screens-only'>
            <img src={PortraitPhoto} alt='portrait' className='about-image'/>
            <div className='about-text'>
              As a Python Developer passionate about backend development, I'm dedicated to crafting robust, efficient, and scalable solutions. My expertise includes Python, Django, and the Django REST Framework, focusing on building RESTful APIs for seamless interactions. I am proficient in database management with PostgreSQL, ensuring data integrity and performance.
              <br />
              <br />
              My journey in software development is marked by a constant pursuit of improvement. I adhere to clean coding principles, emphasizing critical concepts like SOLID, DRY, and KISS. My enthusiasm for learning new technologies and methodologies is a driving force. My familiarity with Linux, Docker, and Git empowers me to streamline workflows and collaborate effectively.
              <br />
              <br />
              Outside of work, I maintain a healthy work-life balance by engaging in a diverse range of activities. I enjoy staying active, from trekking and cycling to archery and sling shooting. Additionally, I indulge my creative side through woodworking, bow making, and the occasional poetry writing.
            </div>
        </div>
    </div>
  )
}
