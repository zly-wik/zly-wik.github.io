import React from 'react'

export default function Projects() {
    const [project, setProject] = React.useState('blog');

    const handleChange = (newAlignment) => {
        console.log(newAlignment);
        if (newAlignment !== null) {
            setProject(newAlignment);
        }
    };

  return (
    <div className='single-page'>
        <div className='title-block'>
            <h1 className='title-header'>My Projects</h1>
        </div>
        <div className='skills-box-group small-screens-only'>
        <div className='skills-toggle-buttons-group' value={project}>
            <div className={project === 'blog' ? 'skills-toggle-button-selected' : 'skills-toggle-button'} onClick={() => handleChange('blog')}>Blog</div>
            <div className={project === 'url-shortener' ? 'skills-toggle-button-selected' : 'skills-toggle-button'} onClick={() => handleChange('url-shortener')}>URL Shortener</div>
            <div className={project === 'shopping-list' ? 'skills-toggle-button-selected' : 'skills-toggle-button'} onClick={() => handleChange('shopping-list')}>Shopping List</div>
        </div>
        { project === 'blog' ? <div className='skills-box'>
                <h2 className='skills-box-header'>
                    Blog
                </h2>
                <hr />
                <br />
                <div className='project-description'>
                    Blog backend project with integrated comments, discussion panel and few others for my personal blog I plan to start in the next September.
                </div>
            </div> : null}
        { project === 'url-shortener' ? <div className='skills-box'>
                <h2 className='skills-box-header'>
                    URL Shortener
                </h2>
                <hr />
                <br />
                <div className='project-description'>
                    Backend application to create shortened versions of long urls to help sharing them with friends.
                </div>
            </div> : null}
        { project === 'shopping-list' ? <div className='skills-box'>
                <h2 className='skills-box-header'>
                    Shopping List
                </h2>
                <hr />
                <br />
                <div className='project-description'>
                    CRUD application that allow creating and managing shopping lists to easily remember everything you want buy.
                </div>
            </div> : null}
        </div>
        <div className='skills-box-group big-screens-only'>
            <div className='skills-box'>
                <h2 className='skills-box-header'>
                    Blog
                </h2>
                <hr />
                <br />
                <div className='project-description'>
                    Blog backend project with integrated comments, discussion panel and few others for my personal blog I plan to start in the next September.
                </div>
            </div>
            <div className='skills-box'>
                <h2 className='skills-box-header'>
                    URL Shortener
                </h2>
                <hr />
                <br />
                <div className='project-description'>
                    Backend application to create shortened versions of long urls to help sharing them with friends.
                </div>
            </div>
            <div className='skills-box'>
                <h2 className='skills-box-header'>
                    Shopping List
                </h2>
                <hr />
                <br />
                <div className='project-description'>
                    CRUD application that allow creating and managing shopping lists to easily remember everything you want buy.
                </div>
            </div>
        </div>
    </div>
  )
}
