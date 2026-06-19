import { Trend, Rate } from 'k6/metrics';
import { loginFlow } from '../flows/login.flow';

const LoginDuration = new Trend("login_duration_ms");
const errors = new Rate("errors");

export const options = {
  scenarios: {
    baseline: {
      executor: 'ramping-vus',
      stages: [
        { duration: '10s', target: 20 },
        { duration: '50s', target: 20 },
        { duration: '5s', target: 0 },
      ],
      // exec: "baselineScenario"
    },
  },
  thresholds: {
    http_req_failed: ['rate<0.05'],
    "http_req_duration{scenario:baseline}": ['p(95)<1000'],
    errors: ["rate<0.01"],
  },
  summaryTrendStats: ['avg', 'min', 'max', 'count']
};

export default () => {
  loginFlow();
}
