import React from 'react';
import { useFetchUsersStats } from './hooks/useFetchUsersStats';
import Button from './components/Button/Button';
import UsersData from './components/UsersData/UsersData';

function App() {
    const { getData, loading, error, data } = useFetchUsersStats();

    return (
        <main>
            <Button onClick={getData} disabled={loading} text="Загрузить данные" />
            <UsersData data={data} loading={loading} error={error} />
        </main>
    );
}

export default App;
