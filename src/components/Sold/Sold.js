import React from 'react';

const Sold = (props) => {
    const sold = props.sold;
    let totalBudget = 0;
        for(let i=0; i<sold.length; i++){
            const player = sold[i];
            totalBudget = totalBudget + player.basePrice;
        }
    return (
        <div>
            <h4>Your Team</h4>
            <p>Player Added: {sold.length}</p>
            <h6></h6>
            <p>Total Cost: {totalBudget}</p>
        </div>
    );
};

export default Sold;