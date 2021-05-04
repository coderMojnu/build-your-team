import React from 'react';
import playerData from '../../playerData/data.json';
import { useState, useEffect } from 'react';
import './Players.css';
import Player from '../Player/Player';
import Sold from '../Sold/Sold';

const Players = () => {
    const [players, setPlayers] = useState([playerData]);
    useEffect(() => {
        setPlayers(playerData)
  }, [])
    const [sold, setSold] = useState([]);
    const handleAddPlayer = (player) => {
        const newSold = [...sold, player];
        setSold(newSold);
    }
    
    return (
        <div className="players-container">
            <div className="unsold-player">
                {
                    players.map(player =><Player handleAddPlayer = {handleAddPlayer} player={player}></Player>)
                }
            </div>
            <div className="sold-player">
                <Sold sold = {sold}></Sold>
            </div>
        </div>
    );
};

export default Players;