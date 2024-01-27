import './App.css';
import React, { useState } from 'react';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Preloader from './components/Preloader/Preloader';
import BarChart from './components/BarChart/BarChart';
import getTodos from './lib/api';
import { groupedUsers, sortedGroups } from './helpers/users';

function App() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true);

        try {
            const { data } = await getTodos();

            if (data) {
                setData(sortedGroups(groupedUsers(data)));
                !error && setError(false);
            }
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    const handleClick = () => {
        getData();
    };

    return (
        <div className="App">
            <main>
                <Button onClick={handleClick} disabled={loading} text={'Загрузить данные'} />

                {(loading || error) && (
                    <div className="status">
                        {loading && <Preloader />}
                        {error && <span>Ошибка...</span>}
                    </div>
                )}

                {!loading && !error && (
                    <section className="cards">
                        {data.map((card) => (
                            <Card key={card.userId} {...card} name={card.userId} />
                        ))}
                    </section>
                )}

                {!!data?.length && <BarChart data={data} />}
            </main>
        </div>
    );
}

export default App;
