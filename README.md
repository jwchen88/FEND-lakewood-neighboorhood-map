# Lakewood Neighborhood Map Project

This is the final project for Udacity's GWG FEND Nanodegree course. Neighborhood Map project is a single page application featuring a map of Lakewood neighborhood in Dallas, TX. The map shows restaurants in the neighborhood, and it gets restaurants' address information through Four Square.

## How to Run the Project

* clone the repo
* install all project dependencies with `npm install`
* start the development server with `npm start`

## Service Worker

The service worker only works when npm build is ran in production mode.
* start the production mode with `npm run build`
* start the server with `serve -s build`
If server isn't installed run `npm install -g serve` before `serve -s build`

## Acknowledgements
* [Google Map React Component Tutorial](https://github.com/fullstackreact/google-maps-react)
* [Yahya Elharony Neighborhood Map Walk-Thru](https://www.youtube.com/channel/UCcWSbBe_s-T_gZRnqFbtyIA)
* [FEND P7 Walkthrough with Doug Brown Project Coach](https://www.youtube.com/watch?v=NVAVLCJwAAo&feature=youtu.be)

## Create React App

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
