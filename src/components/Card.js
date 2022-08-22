import React from 'react';
import '../components/Card.css'

const card = ({ name, email, id }) => {
    return (
        <div className='card'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default card;