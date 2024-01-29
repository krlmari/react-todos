import React from 'react';
import './UserCard.css';

function UserCard({ userId, completedCount, uncompletedCount, items }) {
    return (
        <article className="user-card">
            <div className="user-card__header">
                <h2 className="user-card__title">Пользователь {userId}</h2>
                <p className="user-card__completed">
                    <span>{completedCount}</span> / <span>{uncompletedCount}</span>
                </p>
            </div>

            <ul className="user-card__list">
                {items.map(({ id, title }) => (
                    <li key={id}>{title}</li>
                ))}
            </ul>
        </article>
    );
}

export default UserCard;
