# Mike del Castillo - SDG Technical Test

## Overview

This is my submission for the SDG technical test. It is a React project that pulls data from an API and displays two interactive dropdowns.

## Tech Stack

`React` - I chose React for how standard it is for production-ready applications. It's particularly useful for this project because it allows me to build reactive interfaces easily.

`TypeScript` - Typescript allows me to catch errors at compile time, making the development process smoother. Not only does it eliminate ambiguity, but it also provides documentation for the codebase.

`Tailwind CSS` - I prefer Tailwind as a good middle ground between pure CSS and template-heavy frameworks like Bootstrap. It's useful in this case as well for fast prototyping.

`Jest` - I used Jest to ensure the code continues to work even during fast-paced development.

`Vite` - Vite is one of the most popular build tools for React. I chose it for its reliability and speed.

`React Query` - While using `fetch` is sufficient for this project, I used React Query to make state management easier for fetched data.

## Folder Structure

The project has the following folder structure:

```bash
src/
├── assets/ # Assets like images and icons
├── components/ # Reusable React components
├── hooks/ # Custom React hooks
├── services/ # Services for fetching data
└── index.tsx # Entry point for the application
```

## Code Cleanliness

Each Pull Request is checked for linting errors using ESLint and formatting errors using Prettier. This Github Action (`.github/workflows/pr-checks.yml`) is triggered when a PR is created and must pass before it can be merged.

These checks can manually be done locally with `npm run lint` and `npm run format`.

## Testing

To run the tests, use the following command:

```bash
npm run test
```

## Local Development

### Prerequisites

- Node.js (v23 or higher)
- Access to test API URL and key

### Setup

1. Set up environment variables

This app requires two environment variables to be set:

- `VITE_API_URL`: The URL of the API to fetch data from
- `VITE_API_KEY`: The key to use for the API request

To easily set these variables, create a copy of `.env.example` and name it `.env`. Enter values found on the test brief.

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open the app in your browser

```bash
http://localhost:5173
```

## About Me

I'm Mike del Castillo, a front-end engineer with experience in building scalable and high-performing applications. I specialize in modern web technologies and creating clean, maintainable code.

Let's connect! [LinkedIn](https://www.linkedin.com/in/mikedelcasitllo/) | [GitHub](https://github.com/mikedelcastillo) | [Email](mailto:johnmichaeldc@gmail.com)
