import React from 'react'

const PortfolioRectangle = (props) => {
    return (
        <div className="portfolioItem">
            <div class={`titlePortfolio portfolioItem${props.number}`}>
                <h2>{props.title}</h2>
            </div>
            <p>{props.description}</p>
            <br />
            <ul>
                <li>
                    <p>{props.comment1}</p>
                </li>
                <br />
                <li>
                    <p>{props.comment2}</p>
                </li>
                <br />
                <li>
                    <p>{props.comment3}</p>
                </li>
            </ul>
            <div className="buttons">
                <a href={props.website} target="_blank" className={`project${props.number}`}>visit</a>
                <a href={props.code} target="_blank" className={`project${props.number}`}>code</a> 
            </div>
        </div>
    )
}

export default PortfolioRectangle
