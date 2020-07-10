import React from 'react'
import ReactImage from '../../img/font-awesome/react.svg'
import GithubImage from '../../img/font-awesome/github-square.svg'
import HTMLImage from '../../img/font-awesome/html5_new.svg'
import CSSImage from '../../img/font-awesome/css3_new.svg'
import SASSImage from '../../img/font-awesome/sass_new.svg'
import JavascriptImage from '../../img/font-awesome/js_new.svg'
import NodeImage from '../../img/font-awesome/node_new.svg'
import MySQLImage from '../../img/font-awesome/mysql.svg'
import SequelizeImage from '../../img/font-awesome/sequelize.svg'
import HandlebarsImage from '../../img/font-awesome/handlebarsjs-icon.svg'
import MongoDBImage from '../../img/font-awesome/mongodb-icon.svg'
import BootstrapImage from '../../img/font-awesome/bootstrap-4.svg'

const images = [
    {id: 1, name: 'React', src: ReactImage},
    {id: 2, name: 'GitHub', src: GithubImage},
    {id: 3, name: 'HTML', src: HTMLImage},
    {id: 4, name: 'CSS', src: CSSImage},
    {id: 5, name: 'SASS', src: SASSImage},
    {id: 6, name: 'Javascript', src: JavascriptImage},
    {id: 7, name: 'Node.js', src: NodeImage},
    {id: 8, name: 'MySQL', src: MySQLImage},
    {id: 9, name: 'Sequelize', src: SequelizeImage},
    {id: 10, name: 'Handlebars', src: HandlebarsImage},
    {id: 11, name: 'MongoDB', src: MongoDBImage},
    {id: 12, name: 'Bootstrap', src: BootstrapImage}
]


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
