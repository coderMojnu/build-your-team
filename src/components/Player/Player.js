import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';


const Player = (props) => {
    const {name, img, basePrice, highScore, role} = props.player;

    return (
        <div className="player-container">
            <div className="player-image">
                <img src={img} alt=""/>
            </div>
            <div className="player-information">
                <h3>Name: {name}</h3>
                <p>Role: {role}</p>
                <p>Base Price: ${basePrice}</p>
                <p>Test High Score: {highScore}</p>
                <button className="add-button" onClick={() => props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faAngleDoubleRight} />Add Player</button>
            </div>
        </div>
    );
};

export default Player;