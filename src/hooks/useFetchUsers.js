import { useState } from 'react';
import { getTodos } from '../lib/api';
import { groupUsersWithCount, sortUsersGroups } from '../helpers/users';

const delay = () => new Promise((r) => setTimeout(r, 500));

export const useFetchUsers = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true);

        try {
            await delay();
            const { data } = await getTodos();

            if (data) {
                setData(sortUsersGroups(groupUsersWithCount(data)));
                setError(false);
            }
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return { getData, data, error, loading };
};
