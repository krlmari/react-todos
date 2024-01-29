import React from 'react';
import './UserCards.css';
import UserCard from '../UserCard/UserCard';

function UserCards({ data }) {
    return (
        <section className="user-cards">
            {data.map((card) => (
                <UserCard key={card.userId} {...card} name={card.userId} />
            ))}
        </section>
    );
}

export default UserCards;
