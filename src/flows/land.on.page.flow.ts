import { check } from 'k6';
import http from 'k6/http';
import { setSleep } from '@utils/helpers/sleep.helper';

export const landOnPageFlow = () => {
    const url = process.env.API_URL || 'https://quickpizza.grafana.com/api/pizza';
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
    });

    setSleep();
}
