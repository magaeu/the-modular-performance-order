# the-modular-performance-order

## Project Description

`the-modular-performance-order` is a modular performance testing project built with `k6` and TypeScript. It focuses on reusable flow patterns and environment-based configuration for API performance checks.

## Technology Stack

- TypeScript
- k6
- ESLint
- Prettier
- Node.js / NPM

## Prerequisites

- Node.js installed (recommended version 18+)
- npm installed
- `k6` available on your system path or via npm scripts

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd the-modular-performance-order
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

## Running Tests

### Smoke Test

- Landing page smoke:
    ```bash
    npm run land-on-page:smoke
    ```
- Login smoke:
    ```bash
    npm run login:smoke
    ```

### Load Test

- Landing page load:
    ```bash
    npm run land-on-page:load
    ```
- Login load:
    ```bash
    npm run login:load
    ```

## Project Structure

```
├── eslint.config.mts       ESlint configuration
├── package.json            Contains library dependencies and npm scripts
├── README.md               Project documentation and usage guide
├── src
│   ├── config              Configuration files for different performance tests
│   ├── flows               Reusable flow logic
│   ├── tests               Test scenarios
│   └── utils
|       ├── constants       Reusable constants
|       └── helpers         Common shared functions
└── tsconfig.json           TypeScript compiler settings
```

## Key Features

- Modular test flow implementation for reusable performance scenarios
- Smoke and load test configurations using separate k6 scenario definitions
- TypeScript support with linting and formatting tooling
- Environment variable support for dynamic API URL targeting
- Metrics and thresholds defined in login flow for baseline validation
- Import modules is not working due a [bug](https://github.com/grafana/k6/issues/5501#event-21566862732)

## References

- [k6 documentation](https://k6.io/docs/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Getting started with Performance testing in Typescript](https://medium.com/@sebastian.southern/performance-testing-in-typescript-with-k6-a65377f547e6)
- [Performance under control with K6](https://sii.pl/blog/en/performance-under-control-with-k6-best-practices-test-suite-creation-and-configuration/)
- [Grafana K6: Practical guide](https://dev.to/md_niazmorshed_645dec73/grafana-k6-a-complete-practical-guide-for-automating-performance-tests-2180)
