import React from 'react'

const PortfolioRectangle = () => {
    return (
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
    )
}

export default PortfolioRectangle
