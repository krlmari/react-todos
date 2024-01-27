import axios, { AxiosPromise } from 'axios';

const createTodosAxiosInstance = (baseURL: string | undefined) =>
    axios.create({
        baseURL: baseURL,
        headers: {
            Accept: 'application/json'
        }
    });

const axiosTodosInstance = createTodosAxiosInstance(process.env.REACT_APP_API_URL_TODOS);

const getTodos = (): Promise<AxiosPromise> => axiosTodosInstance.get();

export default getTodos;
