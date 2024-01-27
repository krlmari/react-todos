import './App.css';
import React, { useState } from 'react';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Preloader from './components/Preloader/Preloader';
import BarChart from './components/BarChart/BarChart';
import getTodos from './lib/api';

const sortedGroups = (data) =>
    Object.entries(data)
        .map(([userId, items]) => {
            let completedTrue = 0;
            let completedFalse = 0;

            items.forEach((item) => {
                if (item.completed) completedTrue += 1;
                else completedFalse += 1;
            });

            return { userId, completedTrue, completedFalse, items };
        })
        .sort((a, b) => {
            if (a.completedTrue !== b.completedTrue) {
                return b.completedTrue - a.completedTrue;
            } else {
                return a.userId - b.userId;
            }
        });

const groupedUsers = (data) =>
    data.reduce((acc, item) => {
        const id = item.userId;

        if (!acc[id]) {
            acc[id] = [];
        }

        acc[id].push(item);
        return acc;
    }, {});

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
                setError(false);
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

                <div className="status">
                    {loading && <Preloader />}
                    {error && <span>Ошибка...</span>}
                </div>

                {!loading && !error && (
                    <section className="cards">
                        {data.map((card, index) => (
                            <Card key={card.userId} {...card} name={`${index + 1}`} />
                        ))}
                    </section>
                )}

                {!!data?.length && <BarChart data={data} />}
            </main>
        </div>
    );
}

export default App;
