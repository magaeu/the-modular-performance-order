import { check, sleep } from 'k6';
import http from 'k6/http';

export const options = {
    scenarios: {
        baseline: {
      executor: 'ramping-vus',
      stages: [
        { duration: '10s', target: 20 },
        { duration: '50s', target: 20 },
        { duration: '5s', target: 0 },
      ],
    },
    },
  thresholds: {
    http_req_failed: ['rate<0.05'],
    http_req_duration: ['p(95)<1000'],
  },
  summaryTrendStats: ['avg','min','max','count']
};

export default function () {
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
  sleep(1);

}
