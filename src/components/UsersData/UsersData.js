import React from 'react';
import './UsersData.css';
import Preloader from '../Preloader/Preloader';
import UsersCards from '../UsersCards/UsersCards';
import UserBarChart from '../UserBarChart/UserBarChart';

function UsersData({ data, loading, error }) {
    return (
        <section className="users-data">
            {(loading || error) && (
                <div className="users-data__status">
                    {loading && <Preloader />}
                    {error && <p>Ошибка...</p>}
                </div>
            )}

            {!loading && !error && data.length > 0 && (
                <>
                    <UsersCards data={data} />
                    <UserBarChart data={data} />
                </>
            )}
        </section>
    );
}

export default UsersData;
