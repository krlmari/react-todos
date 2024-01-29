import React from 'react';
import './UserData.css';
import Preloader from '../Preloader/Preloader';
import UserCard from '../UserCard/UserCard';
import BarChart from '../BarChart/BarChart';

function UserData({ data, loading, error }) {
    return (
        <>
            {(loading || error) && (
                <div className="user-data__status">
                    {loading && <Preloader />}
                    {error && <p>Ошибка...</p>}
                </div>
            )}

            {!loading && !error && data.length > 0 && (
                <>
                    <section className="user-data__cards">
                        {data.map((card) => (
                            <UserCard key={card.userId} {...card} name={card.userId} />
                        ))}
                    </section>
                    <BarChart data={data} />
                </>
            )}
        </>
    );
}

export default UserData;
