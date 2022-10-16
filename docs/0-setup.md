# 0. Setup

To setup the sample manually:

1. Create a working directory.
1. Create a `src` directory.
1. Create a `tests` directory.
1. In the root of the working directory, install Playwright:
    `npm init playwright@latest`
1. When prompted, enter the following:
    - TypeScript
    - `tests` folder
    - Add GitHub Actions workflow
    - Install Playwright browsers
1. To verify the setup, run the following:
    - `npx playwright test`
    - `npx playwright show-results`
