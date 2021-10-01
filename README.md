# Getting Started

This project is React + Node project starter kit. It is a mix of *create-react-app* for React and *express* for backend APIs.

Even though in development environment, it is a mix of React development server and express server, in production environment starting only express server with React app bundled will work seamlessly.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode. This will run a react app development server on port 3000 and a NodeJS API server on port 3001

### `npm run node_server`

Runs NodeJS api server on port 3001. There is an option to pass port as a parameter to the min app.js file. However in development mode it is advisable to keep running it on port 3001

### `npm run react`

Runs the React app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

Builds the React app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
