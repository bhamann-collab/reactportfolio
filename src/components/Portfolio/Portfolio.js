import React from 'react'

const Portfolio = () => {
    return (
        <div>
            <section className="navDirect" id="navPortfolio">
                <h1>Portfolio</h1>
                <div className="headingLine"></div>
                <div className="container">
                    <div className="portfolioItem">
                        <div class="titlePortfolio portfolioItem1">
                            <h2>NASA Slack generator</h2>
                        </div>
                        <p>Web application that obtains an image from space and sends it through the slack application</p>
                        <br />
                        <ul>
                            <li>
                                <p>Front-end built using Foundation</p>
                            </li>
                            <br />
                            <li>
                                <p>The NASA and Slack API was used with the help of JQuery and AJAX</p>
                            </li>
                        </ul>
                        <div className="buttons">
                            <a href="https://borucltd.github.io/patient0/" target="_blank" className="project1">visit</a>
                            <a href="https://github.com/borucltd/patient0" target="_blank" className="project1">code</a> 
                        </div>
                    </div>
                    <div className="portfolioItem">
                        <div className="titlePortfolio portfolioItem2">
                            <h2>Food Swiper</h2>
                        </div>
                        <p>An app that allows you to swipe yes or no on restaurants</p>
                        <ul>
                            <li>
                                <p>Front-end UI was built with React</p>
                            </li>
                            <br />
                            <li>
                                <p>Uses express and MongoDB to store restaurant data</p>
                            </li>
                            <br />
                            <li>
                                <p>Utilizes the Google Maps API for accurate restaurant location</p>
                            </li>
                        </ul>
                        <div className="buttons">
                            <a href="https://boiling-headland-74814.herokuapp.com/" target="_blank" class="project2">visit</a>
                            <a href="https://github.com/bhamann-collab/food-swipe" target="_blank" class="project2">code</a> 
                        </div>
                    </div>
                    <div class="portfolioItem">
                        <div class="titlePortfolio portfolioItem3">
                            <h2>Kicks United</h2>
                        </div>
                        <p>A virtual shoe store that allows you to purchase shoes and add them in your inventory</p>
                        <ul>
                            <li>
                                <p>Uses handlebars as the templating language</p>
                            </li>
                            <br />
                            <li>
                                <p>Uses MySQL for the database and Sequelize for the ORM</p>
                            </li>
                        </ul>
                        <div class="buttons">
                            <a href="https://kicksunited.herokuapp.com/" target="_blank" class="project3">visit</a>
                            <a href="https://github.com/bhamann-collab/shop" target="_blank" class="project3">code</a> 
                        </div>
                    </div>
                </div>
            </section>       
        </div>
    )
}

export default Portfolio
