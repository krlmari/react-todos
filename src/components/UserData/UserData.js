import React from 'react';
import './UserData.css';
import Preloader from '../Preloader/Preloader';
import UserCards from '../UserCards/UserCards';
import UserBarChart from '../UserBarChart/UserBarChart';

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
                    <UserCards data={data} />
                    <UserBarChart data={data} />
                </>
            )}
        </>
    );
}

export default UserData;
