import React from 'react';
import './UsersCards.css';
import UserCard from '../UserCard/UserCard';

function UsersCards({ data }) {
    return (
        <div className="users-cards">
            {data.map((card) => (
                <UserCard key={card.userId} {...card} name={card.userId} />
            ))}
        </div>
    );
}

export default UsersCards;
