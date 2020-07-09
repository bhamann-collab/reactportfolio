import React from 'react'
import images from '../../img/skillsImg'




const Skills = () => {
    return (
            <section className="navDirect" id="navSkills">
            <h1>Skills</h1>
            <div className="headingLine"></div>
            <div className="container">
                { images.map(({id, src, name}) => 
                <div className="skillComponent">
                    <h3>{name}</h3>
                    <img key={id} src={src} className="extraPadding"/>
                </div>)}
            </div>
        </section>

    )
}

export default Skills
