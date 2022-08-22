import React from 'react';
import Card from '../components/Card';

const CardList = ({ robots }) => {

    const cardArray = robots.map((users, i) => {
        return (
            <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email} 
            /> 
        );
    })
    return (
        <div>
            { cardArray }
        </div>
    );
}

export default CardList; 