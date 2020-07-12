import React from 'react'
import PortfolioRectangle from './PortfolioRectangle'

const Portfolio = () => {
    return (
        <div>
            <section className="navDirect" id="navPortfolio">
                <h1>Portfolio</h1>
                <div className="headingLine"></div>
                <div className="container">
               
                    <PortfolioRectangle 
                    number={1}
                    title={"NASA Slack Generator"}
                    description={"Web application that obtains an image from space and sends it through the slack application"}
                    comment1={"Front-end built using Foundation"}
                    comment2={"The NASA and Slack API was used"}
                    comment3={"JQuery and AJAX was used to retrieve data"}
                    website={"https://borucltd.github.io/patient0/"}
                    code={"https://github.com/borucltd/patient0"}
                    />
                    <PortfolioRectangle 
                    number={2}
                    title={"Food Swiper"}
                    description={"An app that allows you to swipe yes or no on restaurants"}
                    comment1={"Front-end UI was built with React"}
                    comment2={"Uses express and MongoDB to store restaurant data"}
                    comment3={"Utilizes the Google Maps API for accurate restaurant location"}
                    website={"https://boiling-headland-74814.herokuapp.com/"}
                    code={"https://github.com/bhamann-collab/food-swipe"}
                    />
                    <PortfolioRectangle 
                    number={3}
                    title={"Kicks United"}
                    description={"A virtual shoe store that allows you to purchase shoes and add them in your inventory"}
                    comment1={"Uses handlebars as the templating language and Bootstrap for the front-end framework"}
                    comment2={"Uses MySQL for the database"}
                    comment3={"Uses sequelize for the ORM"}
                    website={"https://kicksunited.herokuapp.com/"}
                    code={"https://github.com/bhamann-collab/shop"}
                    />
                </div>
            </section>       
        </div>
    )
}

export default Portfolio
