import { check, sleep } from 'k6';
import http from 'k6/http';

export function loginFlow() {
    const url = 'https://quickpizza.grafana.com/api/users/token/login';
    const payload = JSON.stringify({
        username: 'default',
        password: '1234',
    });
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const loginResponse = http.post(url, payload, params);

    check(loginResponse, {
        'response code status was 200': (resp) => resp.status == 200,
    });
    sleep(Math.random() * 2 + 0.5);
}
