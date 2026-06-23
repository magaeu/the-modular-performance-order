import { Trend, Rate } from 'k6/metrics';
import { check } from 'k6';
import http from 'k6/http';

const LoginDuration = new Trend("login_duration_ms");
const errors = new Rate("errors");
const url = 'https://quickpizza.grafana.com/api/users/token/login';

export const options = {
    thresholds: {
        http_req_failed: ['rate<0.05'],
        "http_req_duration{scenario:baseline}": ['p(95)<1000'],
        errors: ["rate<0.01"],
    },
    summaryTrendStats: ['avg', 'min', 'max', 'count']
};

export default function loginTest() {
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
        'body is not null': (resp) => resp.body !== null
    });
}
