import { check } from 'k6';
import http from 'k6/http';
import { APIRoutes } from '../utils/constants/routes';
import { setSleep } from '../utils/helpers/sleep.helper';

const url = `${process.env.API_URL}${APIRoutes.LOGIN}`;

export const loginFlow = () => {
    const payload = JSON.stringify({
        username: 'default',
        password: '1234',
    });
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
        tags: {
            name: 'login',
        }
    };

    const loginResponse = http.post(url, payload, params);

    check(loginResponse, {
        'response code status was 200': (resp) => resp.status == 200,
    });

    setSleep();
}
