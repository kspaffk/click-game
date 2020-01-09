import React from 'react'
import './styles.css'

function Header(props) {
    return (
        <header>
            <ul>
                <li className="title">Vader Click</li>
                <li className="scoreboard">Score: {props.score} || Top Score: {props.topScore}</li>
            </ul>
        </header>

    )
}

export default Header