import { useState } from 'react';
import { getTodos } from '../lib/api';
import { groupUsersWithCount, sortUsersGroups } from '../helpers/users';
import { delay } from '../helpers/index';

export const useFetchUsersStats = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true);
        error && setError(false);

        try {
            await delay(500);
            const { data } = await getTodos();

            if (data) {
                setData(sortUsersGroups(groupUsersWithCount(data)));
            }
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return { getData, data, error, loading };
};
