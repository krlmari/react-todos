import React from 'react';
import { useFetchUsersStats } from './hooks/useFetchUsersStats';
import Button from './components/Button/Button';
import UserData from './components/UserData/UserData';

function App() {
    const { getData, loading, error, data } = useFetchUsersStats();

    return (
        <main>
            <Button onClick={getData} disabled={loading} text="Загрузить данные" />
            <UserData data={data} loading={loading} error={error} />
        </main>
    );
}

export default App;
