import Axios from "axios";
import URI from "urijs";
import { AuthenticationError, NetworkError, ClientError, ServerError } from "./error-type";

const baseUrl = URI(process.env.REACT_APP_API_URL);

const axios = Axios.create({
    headers: {

    }
});

axios.interceptors.request.use((request) => {
    // To be used when implementing auth 
    return request;
});

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.message === "Network Error") {
            return Promise.reject(new NetworkError(error.message));
        } else if (error.response.status >= 500) {
            return Promise.reject(
                new ServerError(error.response.data.error, error.response.status)
            );
        } else if (error.response.status === 401) {
            return Promise.reject(new AuthenticationError("Unauthorized"));
        } else if (error.response.status >= 400 && error.response.status < 500) {
            return Promise.reject(
                new ClientError(
                    error.response.data.status || error.response.data,
                    error.response.status
                )
            );
        }

        return Promise.reject({ ...error });
    }
);

const httpService = {
    async get(payload) {
        const url = URI(baseUrl).segment(payload.action);

        if (payload.segment)
            url.segment(payload.segment);

        if (payload.query)
            url.addSearch(payload.query);

        return axios.get(url.toString());
    },
    async post(payload) {
        const url = URI(baseUrl).segment(payload.action);
        const headers = { 'Content-Type': 'application/json' };
        if (payload.formData)
            headers['headers'] = { 'Content-Type': 'multipart/form-data' }

        if (payload.segment)
            url.segment(payload.segment);

        return axios.post(url.toString(), payload.data || payload.formData, headers);
    },
    async put(payload) {
        const url = URI(baseUrl).segment(payload.action);
        const headers = {};

        if (payload.segment)
            url.segment(payload.segment.toString());

        if (payload.formData)
            headers['headers'] = { 'Content-Type': 'multipart/form-data' }

        return axios.put(url.toString(), payload.data, headers);
    },
    async delete(payload) {
        const url = URI(baseUrl).segment(payload.action);

        if (payload.segment)
            url.segment(payload.segment.toString());

        return axios.delete(url.toString(), { data: payload.data });
    },
};

export default httpService;