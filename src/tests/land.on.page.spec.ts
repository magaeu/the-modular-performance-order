import http from 'k6/http';
import { check, sleep } from 'k6';

export default function landOnPageTest() {
  const url = 'https://quickpizza.grafana.com/api/pizza';
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
    tags: {
      name: 'land-on-page',
    }
  };

  const res = http.get(url, params);

  check(res, {
    'response code status was 200': (res) => res.status == 200,
    'body is not null': (res) => res.body !== null
  });

  sleep(Math.floor(Math.random() * (2 - 1) + 1));
}
