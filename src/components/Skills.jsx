import React from 'react'

export default function Skills() {
    const [alignment, setAlignment] = React.useState('tech');

    const handleChange = (newAlignment) => {
        console.log(newAlignment);
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };

  return (
    <div className='single-page'>
        <div className='title-block'>
            <h1 className='title-header'>Skills</h1>
        </div>
        <div className='skills-box-group small-screens-only'>
        <div className='skills-toggle-buttons-group' value={alignment}>
            <div className={alignment === 'tech' ? 'skills-toggle-button-selected' : 'skills-toggle-button'} onClick={() => handleChange('tech')}>Technology</div>
            <div className={alignment === 'tools' ? 'skills-toggle-button-selected' : 'skills-toggle-button'} onClick={() => handleChange('tools')}>Tools</div>
            <div className={alignment === 'soft' ? 'skills-toggle-button-selected' : 'skills-toggle-button'} onClick={() => handleChange('soft')}>Soft Skills</div>
        </div>
        { alignment === 'tech' ? <div className='skills-box'>
                <h2 className='skills-box-header'>
                    Technology
                </h2>
                <hr />
                <ul className='skills-list'>
                    <li className='skills-list-item'>
                        Python 3.x
                    </li>
                    <li className='skills-list-item'>
                        Django
                    </li>
                    <li className='skills-list-item'>
                        Django REST Framework
                    </li>
                    <li className='skills-list-item'>
                        Pytest
                    </li>
                    <li className='skills-list-item'>
                        MySQL, PostgreSQL
                    </li>
                    <li className='skills-list-item'>
                        Pandas, Numpy
                    </li>
                    <li className='skills-list-item'>
                        HTML, CSS, JavaScript (ReactJS)
                    </li>
                    <li className='skills-list-item'>
                        basics FastAPI, Flask, and C#
                    </li>
                </ul>
            </div> : null}
        { alignment === 'tools' ? <div className='skills-box'>
                <h2 className='skills-box-header'>
                    Tools and others
                </h2>
                <hr />
                <ul className='skills-list'>
                    <li className='skills-list-item'>
                        OOP, SOLID, DRY, KISS
                    </li>
                    <li className='skills-list-item'>
                        Clean Code
                    </li>
                    <li className='skills-list-item'>
                        Design Patters
                    </li>
                    <li className='skills-list-item'>
                        Algorithms
                    </li>
                    <li className='skills-list-item'>
                        Git, GitHub, CI/CD GitHub Actions
                    </li>
                    <li className='skills-list-item'>
                        Jira, TeamCity, Sentry
                    </li>
                    <li className='skills-list-item'>
                        English (advanced)
                    </li>
                </ul>
            </div> : null}
        { alignment === 'soft' ? <div className='skills-box'>
                <h2 className='skills-box-header'>
                    Soft skills
                </h2>
                <hr />
                <ul className='skills-list'>
                    <li className='skills-list-item'>
                        Proactive approach
                    </li>
                    <li className='skills-list-item'>
                        Very technical mindset
                    </li>
                    <li className='skills-list-item'>
                        Team player
                    </li>
                    <li className='skills-list-item'>
                        Creativity
                    </li>
                    <li className='skills-list-item'>
                        Well self-organised
                    </li>
                    <li className='skills-list-item'>
                        Strong problem solving
                    </li>
                    <li className='skills-list-item'>
                        Good listener
                    </li>
                </ul>
            </div> : null}
        </div>
        <div className='skills-box-group big-screens-only'>
            <div className='skills-box'>
                <h2 className='skills-box-header'>
                    Technology
                </h2>
                <hr />
                <ul className='skills-list'>
                    <li className='skills-list-item'>
                        Python 3.x
                    </li>
                    <li className='skills-list-item'>
                        Django
                    </li>
                    <li className='skills-list-item'>
                        Django REST Framework
                    </li>
                    <li className='skills-list-item'>
                        Pytest
                    </li>
                    <li className='skills-list-item'>
                        MySQL, PostgreSQL
                    </li>
                    <li className='skills-list-item'>
                        Pandas, Numpy
                    </li>
                    <li className='skills-list-item'>
                        HTML, CSS, JavaScript (ReactJS)
                    </li>
                    <li className='skills-list-item'>
                        basics FastAPI, Flask, and C#
                    </li>
                </ul>
            </div>
            <div className='skills-box'>
                <h2 className='skills-box-header'>
                    Tools and others
                </h2>
                <hr />
                <ul className='skills-list'>
                    <li className='skills-list-item'>
                        OOP, SOLID, DRY, KISS
                    </li>
                    <li className='skills-list-item'>
                        Clean Code
                    </li>
                    <li className='skills-list-item'>
                        Design Patters
                    </li>
                    <li className='skills-list-item'>
                        Algorithms
                    </li>
                    <li className='skills-list-item'>
                        Git, GitHub, CI/CD GitHub Actions
                    </li>
                    <li className='skills-list-item'>
                        Jira, TeamCity, Sentry
                    </li>
                    <li className='skills-list-item'>
                        English (advanced)
                    </li>
                </ul>
            </div>
            <div className='skills-box'>
                <h2 className='skills-box-header'>
                    Soft skills
                </h2>
                <hr />
                <ul className='skills-list'>
                    <li className='skills-list-item'>
                        Proactive approach
                    </li>
                    <li className='skills-list-item'>
                        Very technical mindset
                    </li>
                    <li className='skills-list-item'>
                        Team player
                    </li>
                    <li className='skills-list-item'>
                        Creativity
                    </li>
                    <li className='skills-list-item'>
                        Well self-organised
                    </li>
                    <li className='skills-list-item'>
                        Strong problem solving
                    </li>
                    <li className='skills-list-item'>
                        Good listener
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
