import axios from 'axios';

const createTodosAxiosInstance = (baseURL) =>
    axios.create({
        baseURL,
        headers: {
            Accept: 'application/json'
        }
    });

const axiosTodosInstance = createTodosAxiosInstance(process.env.REACT_APP_API_URL_TODOS);

export const getTodos = () => axiosTodosInstance.get();
