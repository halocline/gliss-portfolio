## About

Code portfolio showcasing example projects.

Portfolio App is Node/React using Material-UI UI components.

## Deployment on Google App Engine

### Build & Deploy

```
#!bash
$ cd [project root directory]
$ npm run build
$ cd /build
$ gcloud app deploy ../app.yml

```

### Preview & Monitor Logs

```
#!bash
$ gcloud app browse # opens app in default browser
$ gcloud app logs tail -s default

```

Quick Reference: https://medium.com/tech-tajawal/deploying-react-app-to-google-app-engine-a6ea0d5af132


## Create React App Documentation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
