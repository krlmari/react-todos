import React from 'react';
import './Card.css';

function Card({ name, completedCount, uncompletedCount, items }) {
    return (
        <article className="card">
            <div className="cardHeader">
                <h2>Пользователь {name}</h2>
                <p className="cardCompleted">
                    <span>{completedCount}</span> / <span>{uncompletedCount}</span>
                </p>
            </div>

            <ul className="cardList">
                {items.map((item, i) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </article>
    );
}

export default Card;
