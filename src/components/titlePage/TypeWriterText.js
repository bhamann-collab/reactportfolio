import React from 'react'
import typeWriter from './typeWriter'

const TypeWriterText = (props) => {

    typeWriter();

    return (
        <h3>
            <a className="typewrite" data-period={props.speed} data-type={`${JSON.stringify(props.text)}`}>
                <span className="wrap"></span>
            </a>
        </h3>
    )
}

export default TypeWriterText
