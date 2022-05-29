# Zuru Kenya Application

> It is a tour management application that allows user to Create Read Update and Delete tours. The project is created using node, expressjs, and pug for the views implementation

## Prerequisites

This project requires NodeJS (version 14 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.14.13
v10.24.1
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

## Installation
Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/munyuaDeveloper/zuru-kenya-moringa-test.git
$ cd zuru-kenya-moringa-test
```

To install and set up the library, run:

```sh
$ npm install
```

Or if you prefer using Yarn:

```sh
$ yarn add
```
## configure-your-env-variables
Create a file inside the main folder and call it config.env.
Add these lines and provide the values of each variable
```sh
NODE_ENV = development
PORT = 3000
USERNAME=admin
DATABASE=
DATABASE_PASSWORD=admin
JWT_SECRET=my-first-node-application
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90
```

## Import the test data
```sh
node dev-data/data/import-dev-datajs --delete
node dev-data/data/import-dev-datajs --import
```


### Serving the app

```sh
$ npm run dev
```

## Author

* **Peter Munyua** - [munyuaDeveloper](https://github.com/munyuaDeveloper)
