import { check } from 'k6';
import http from 'k6/http';

export default function () {
  const url = 'https://quickpizza.grafana.com/api/users/token/login';
  const payload = JSON.stringify({
    username: 'default',
    password: '12345678',
  });
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    'response code status was 200': (res) => res.status == 200,
  });
}
