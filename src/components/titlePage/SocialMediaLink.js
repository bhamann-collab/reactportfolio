import React from 'react'

const SocialMediaLink = (props) => {
    return (
        <div>
            <a href={props.link} target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24">
                    <path xmlns="http://www.w3.org/2000/svg" d={props.path}/>
                </svg>
            </a>
        </div>
    )
}

export default SocialMediaLink
