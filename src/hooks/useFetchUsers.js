import { useState } from 'react';
import getTodos from '../lib/api';
import { groupedUsers, sortedGroups } from '../helpers/users';

export const useFetchUsers = () => {
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

    return { getData, data, error, loading };
};
