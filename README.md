[![Build Status](https://dev.azure.com/rxphaiquangtran/my-shopping-app/_apis/build/status/haiquangtran.my-shopping-app?branchName=master)](https://dev.azure.com/rxphaiquangtran/my-shopping-app/_build/latest?definitionId=1&branchName=master)

# My Shopping App

This shopping app provides a list of products (mobile phones) that can be added to the shopping cart or removed from the shopping cart.

The project is built using the main technologies: React (16.5.2), Redux (4.0.1), and Bootstrap (4.1.3).
The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) to learn more visit https://github.com/facebook/create-react-app.

## Pre-requisites

- yarn (I am using 1.10.1)
- Node 8.10.0 or later (I am using v10.11.0)
- You will also need use a command line to issue the commands below.

## Installing Dependencies
- Open your command line
- Navigate into the root project folder
- Type in the following command to install all dependencies:

```
yarn install
```

## Run Project
- Open your command line
- Navigate into the root project folder
- To run the app in development mode, use the command

```
yarn start
```

- Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

## Run tests
- Open your command line
- Navigate into the root project folder
- To run the project tests, use the command

```
yarn test
```

- Runs the test watcher in an interactive mode. By default, runs tests related to files changed since the last commit. [Read more about testing.](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

## Build project

```
yarn build
```

- Builds the app for production to the `build` folder.
- It correctly bundles React in production mode and optimizes the build for the best performance.
- The build is minified and the filenames include the hashes.
- The app is then ready to be deployed.

## Project Folder Structure Summary

Below is an overview of the project folder structure and how it is organised. I have left out files which aren't important to demonstrate the folder structure. CSS and tests are in the same folder as their respective components/containers.

```
my-shopping-app
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── actions
    ├── api
    ├── components
    ├── constants
    ├── containers
        ├── App.css
        ├── App.js
        ├── App.spec.js
        └── ...
    ├── reducers
    ├── store
    ├── index.js
    └── setupTests.js
```

- **README.md**
  - Read me file
- **package.js**
  - JSON file containining all the required dependencies including the name and version of each dependency.
- **public folder**
  - All the public files go here
- **src/actions folder**
  - Redux actions go here.
- **src/api folder**
  - Backend API calls go here.
- **src/components folder**
  - All simple stateless presentation (aka Dumb) components go here.
  - CSS and tests are in the same folder as their respective components/containers.
- **src/constants folder**
  - All the project constants go here including redux actions.
- **src/containers folder**
  - All stateful components (the ones that make the API calls) go here. These are the components that are connected to the Redux store.
  - CSS and tests are in the same folder as their respective components/containers.
- **src/reducers folder**
  - Redux reducers go here.
- **src/store folder**
  - Redux store goes here
- **index.js**
  - A JS file which initializes the app and calls ReactDOM.render as well as sets up the redux Provider.
- **setupTests.js**
  - Sets up test adapters.
