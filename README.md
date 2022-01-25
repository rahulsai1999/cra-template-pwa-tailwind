# CRA Template (PWA and Tailwind)

## How to Install

### With NPM

`npx create-react-app my-app --template pwa-tailwind`

### With Yarn

`yarn create react-app my-app --template pwa-tailwind`

## Features

- PWA with cache replacement
- Forms - React Hook Form
- CSS Utilities - Tailwind CSS
- State Management - Redux Toolkit
- Routing - React Router DOM

## Commands

### Development

- `yarn dev` Starts the development server
- `yarn build`: Builds the application bundle
- `serve -s build`: Serve the production build (local testing)

### Production

- `yarn version --patch | --minor | --major`: Increments the version number (important for clear cache)
- `yarn build:prod`: Builds the production bundle for the PWA
