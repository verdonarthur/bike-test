# bike test, a simple express app exemple

## Prerequisite
- Postgres database
- Node
- Git

## Description
The app is develop with the idea to be as simple as possible.

### Frontend
The JS code for the frontend is located in the frontend folder and styling/html part in the public folder.

The following libs/techno are used in the backend:
- Webpack
- Bootstrap
- JQuery

### Backend
The code for the backend is located in the backend folder.

The following libs/techno are used in the backend:
- TypeORM
- TypeScript
- Express



## Installation instruction

### 1 - Clone the repo !
First you need to clone the repo with the command:
```
# HTTPS Version
git clone https://github.com/verdonarthur/bike-test.git

# SSH Version
git clone git@github.com:verdonarthur/bike-test.git
```

### 2 - Install dependencies
Now that you have all the source code of the application, you need to Install the dpendencies with npm. To do that just execute the following command in the root directory of the application :
```
# This command is going to install all the dependencies of the project
npm ci
```

### 3 - Setup the app
To configure the application, you need to copy and rename the file ```.env.example``` into ```.env```. Then change the value of the differents parameters according to you need.

### 4 - Develop the app
To develop the app and have all file compiled when a change occure, just launch the command:
```
npm run watch
```

### 5 - Build the app for production
```
npm run build
```