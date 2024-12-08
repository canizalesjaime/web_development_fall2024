# Class 12 React

## Table of contents:
1. Links
1. React
2. React + Vite

## Links
* [html reference sheet](https://www.w3schools.com/tags/ref_standardattributes.asp)

## React
React is a popular JavaScript library used for building user interfaces (UIs), particularly for single-page applications. It allows developers to create reusable UI components, manage the state of an application effectively, and render dynamic content efficiently.

Here’s a breakdown of React concepts:

###  What is React?
* **Developed by:** Facebook (now Meta).
* **Focus:** Declarative, component-based architecture.
* **Purpose:** Makes it easier to build interactive UIs by breaking the UI into reusable, self-contained components.

### Core Features
1. **Components**
  * Reusable building blocks of a UI.
  * Types:
    * **Functional Components:** Defined as functions; often use React hooks for state and side effects.
    * **Class Components:** Defined as ES6 classes; include lifecycle methods for more complex state management.
    ```jsx
    // Example of a Functional Component
    const Greeting = ({ name }) => <h1>Hello, {name}!</h1>;
    ```

2. **JSX (JavaScript XML)**
  * Syntax extension that combines HTML with JavaScript.
  * Makes it easy to define UI elements within JavaScript code.
  ```jsx
  const element = <h1>Hello, world!</h1>;
  ```

3. **Props**
  * Short for "properties."
  * Used to pass data from a parent component to a child component.
```jsx
<Greeting name="John" />  // `name` is a prop.
```

4. **State**
  * Manages dynamic data within a component.
  * Updated via the ```useState``` hook in functional components.
  ```jsx
  const [count, setCount] = useState(0);
  ```

5. **Virtual DOM**
  * React creates a lightweight representation of the real DOM (the "Virtual DOM") and uses a process called reconciliation to update only the parts of the DOM that need to change.
  * This improves performance.

### React Hooks
Hooks are functions introduced in React 16.8 to manage state and side effects in functional components.
* **useState:** Manages state.
* **useEffect:** Handles side effects (e.g., fetching data, subscribing to events).
* **useContext:** Provides global state management.
* Many others like ```useMemo```, ```useReducer```, etc.

### Key Advantages
* **Component Reusability:** Simplifies code maintenance.
* **Efficient Updates:** Virtual DOM minimizes unnecessary updates.
* **Declarative:** Developers describe what the UI should look like, and React handles the rest.
* **Ecosystem:** Rich set of libraries (e.g., Redux for state management, React Router for routing).

### React Example
A simple counter application:
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

### How React Fits Into a Larger Ecosystem
React focuses only on UI, so you may pair it with:
* **React Router** for navigation.
* **Redux or Context API** for global state management.
* **Axios or Fetch API** for API calls.

React is widely used for building modern web apps due to its simplicity, flexibility, and performance optimization.


## React + Vite Setup
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


There are many libraries that may not be available to the web browsers javascript compiler that are on node. One popular solution to this problem is using vite. Vite will host our whole website application on a server and will export all necessary dependencies. 

###
Install react with vite steps: 
1. make sure node is most recent lts.
2. ```npm create vite@latest my-react-app --template react```
3. type y, then select react and then select javascript
4. ```cd my-react-app```
5. ```npm install```
6. ```npm run dev``` runs the react app on port 5173(usually)
7. open web browser and go to localhost:5173 to check out web app!


## 5. Notes
* Alternatively, if you can't locally install vite with react then use: [web browser react](https://codesandbox.io/)