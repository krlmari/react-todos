import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <article className="card">
            <div className="cardHeader">
                <h2>Пользователь {props.name}</h2>
                <p className="cardCompleted">
                    <span>{props.completedTrue}</span> / <span>{props.completedFalse}</span>
                </p>
            </div>

            <ul className="cardList">
                {props.items.map((item, i) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </article>
    );
}

export default Card;
