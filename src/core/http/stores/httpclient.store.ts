import { defineStore } from 'pinia'
import { useAuthStore } from '@core/auth/stores/auth.store';
import { HttpError } from '../classes/httpError';

export const useHttpStore = defineStore('http', () => {
    const authStore = useAuthStore();
    const baseUrl = import.meta.env.VITE_SERVER_BASE_URL

    function createHeaders(): Headers {
        var headers: Headers = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
        
        if(authStore.isAuthenticated)
            headers.append('Authorization', 'Bearer ' + authStore.token);

        return headers;
    }

    function handleError(requestUrl: string, payload: any, fetchResponse?: Response, genericError?: any): HttpError {
        const error = fetchResponse ? 
            new HttpError().fromFetchResponse(fetchResponse) : new HttpError().fromGenericError(genericError);
        error.url = requestUrl;
        error.payload = payload;
        return error;
    }

    async function get<T>(endpoint: string): Promise<T | undefined | null> {
        const payload = {
            method: 'GET',
            headers: createHeaders()
        };

        try{
            const response = await fetch(baseUrl + endpoint, payload);
            if (response.status === 401 && authStore.isAuthenticated) {
                authStore.logout();
            }

            if(!response.ok)
                Promise.reject(handleError(baseUrl + endpoint, payload, response))

            if (response.status === 204) {
                return undefined;
            }

            return await response.json();
        } catch (error) {
            Promise.reject(handleError(baseUrl + endpoint, payload, undefined, error))
        }
    }

    async function post<T>(endpoint: string, data: any): Promise<T | undefined | null> {
        const payload = {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify(data)
        };

        try{
            const response = await fetch(baseUrl + endpoint, payload);
            if (response.status === 401 && authStore.isAuthenticated) {
                authStore.logout();
            }

            if(!response.ok)
                Promise.reject(handleError(baseUrl + endpoint, payload, response))

            if (response.status === 204) {
                return undefined;
            }

            return await response.json();
        } catch (error) {
            Promise.reject(handleError(baseUrl + endpoint, payload, undefined, error))
        }
    }

    async function put<T>(endpoint: string, data: any): Promise<T | undefined | null> {
        const payload = {
            method: 'PUT',
            headers: createHeaders(),
            body: JSON.stringify(data)
        };

        try{
            const response = await fetch(baseUrl + endpoint, payload);
            if (response.status === 401 && authStore.isAuthenticated) {
                authStore.logout();
            }

            if(!response.ok)
                Promise.reject(handleError(baseUrl + endpoint, payload, response))

            if (response.status === 204) {
                return undefined;
            }

            return await response.json();
        } catch (error) {
            Promise.reject(handleError(baseUrl + endpoint, payload, undefined, error))
        }
    }

    async function del<T>(endpoint: string): Promise<T | undefined | null> {
        const payload = {
            method: 'DELETE',
            headers: createHeaders()
        };

        try{
            const response = await fetch(baseUrl + endpoint, payload);
            if (response.status === 401 && authStore.isAuthenticated) {
                authStore.logout();
            }

            if(!response.ok)
                Promise.reject(handleError(baseUrl + endpoint, payload, response))

            if (response.status === 204) {
                return undefined;
            }

            return await response.json();
        } catch (error) {
            Promise.reject(handleError(baseUrl + endpoint, payload, undefined, error))
        }
    }

    return { get, post, put, del }
})