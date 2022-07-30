reac-vite-redux-query-template
========

A basic starter kit for building React applications.

This project is bootstrapped using [Vite](https://vitejs.dev/guide/).



# Includes

* React 18
* Vite
* react-router
* Redux Toolkit
* @tanstack/react-query



# Additional Features

* No UI/CSS framework included. Can use CSS module by default.
* Dark mode handling using [React Context](https://reactjs.org/docs/context.html).
* Localization support (EN/JA) using custom hook `useCaption`.
* Sample SVG icon as component with variable property (e.g. color).

# Getting started

Clone the repository, install dependencies and run app

```sh
$ git clone https://github.com/supershaneski/react-vite-redux-query-template.git myproject

$ cd myproject

$ npm install

$ npm start
```

Then open your browser to `http://localhost:3000/` or some other port depending on the availability.

# Modules Manual Installation

To manually install the modules included in your blank project

* [react-redux/RTK v8](https://react-redux.js.org)
  ```sh
  $ npm i react-redux

  $ npm i @reduxjs/tookit
  ```

* [@tanstack/react-query v4](https://tanstack.com/query/v4/docs/installation)
  ```sh
  $ npm i @tanstack/react-query
  ```

* [react-router v6](https://reactrouter.com/docs/en/v6/getting-started/overview)
  ```sh
  $ npm i react-router-dom@6
  ```

