import './App.css';
import React from 'react';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Preloader from './components/Preloader/Preloader';
import BarChart from './components/BarChart/BarChart';
import { useFetchUsers } from './hooks/useFetchUsers';

function App() {
    const { getData, loading, error, data } = useFetchUsers();

    return (
        <main>
            <Button onClick={getData} disabled={loading} text="Загрузить данные" />

            {(loading || error) && (
                <div className="status">
                    {loading && <Preloader />}
                    {error && <p>Ошибка...</p>}
                </div>
            )}

            {!loading && !error && data.length > 0 && (
                <>
                    <section className="cards">
                        {data.map((card) => (
                            <Card key={card.userId} {...card} name={card.userId} />
                        ))}
                    </section>
                    <BarChart data={data} />
                </>
            )}
        </main>
    );
}

export default App;
