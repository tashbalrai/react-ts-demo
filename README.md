## Overview

Tax calculator using React and Typescript.

This repo is created using the `create-react-app`.

I know that this way of building the React application is now deprecated. At first, I decided to go with Next.Js. Since, this assignment is concerned with React + Typescript, so I prefered `create-react-app` over Next.Js to work with pure React + Typescript and to avoid any abstraction provided by Next.Js framework.

I have tried to complete the task within the allocated time, but I wasn't able to add full unit tests for all the components. I have added few unit tests. Like, I have covered the unit test for `calculateTaxHelper()` function and for few other components.

For Tax calculater, I have added funcationality for both Level 1 and Level 2.

### Installation

Clone the repo and run the following command to install the application.

```bash
npm install
```

Once above command completes, please make sure that the docket server for the Tax api is running.
`https://github.com/Points/interview-test-server`

Use the following commands to run the api server.

```bash
docker pull ptsdocker16/interview-test-server
docker run --init -p 5000:5000 -it ptsdocker16/interview-test-server
```

After your, docker container is running, start the application by using the following command.

```bash
npm start
```

The above command automatically open the browser to http://localhost:3000
