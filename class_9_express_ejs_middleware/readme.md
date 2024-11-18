# Class 9 Middleware and embedded javascript
## Table of contents:
1. nodemon
2. Express
3. Event Handlers
4. HTTP Status Codes
5. Postman
6. Middleware
7. Embeded Javascript(EJS)
8. Notes
   


## nodemon
The first thing we will do is install the nodemon command globally:```npm i -g nodemon``` the <em>-g</em> flag is used to install packages globally(only do this for this case!!). The nodemon command will allow us to make changes to our servers dynamically. <br><br>

Run your first server by running ``` nodemon express_server/index.js```. Now you can visit this server by visiting localhost:3000 in your web browser. Review the [file](./express_server/index.js), and try to visit the other webpages available.


## Express
Express is a popular web application framework for Node.js. It provides a robust set of features for building web and mobile applications. Essentially, it simplifies the process of creating server-side applications by offering tools and conventions for handling requests, routes, and middleware.

Here's a breakdown of key concepts in Express:

### What is Express?
* Minimalist and Unopinionated: Express is lightweight and does not enforce a specific way of organizing your application. You have the flexibility to design your app as you like.
* Middleware Framework: Middleware functions are at the core of Express, enabling powerful customization of request/response handling.

### Key Features
* **Routing:** Allows you to define URL patterns (routes) and associate them with specific request handlers.
* **Middleware:** Functions that intercept and process requests and responses (e.g., parsing JSON, logging, or authentication).
* **Template Engines:** Support for rendering dynamic views with templating engines like Pug, EJS, or Handlebars.
* **Error Handling:** Provides mechanisms for capturing and handling errors effectively.
* **HTTP Utility Methods:** Provides methods to handle requests (e.g., req.body, req.query) and responses (e.g., res.send, res.json).

### Installing Express
To start using Express, install it via npm:

```bash
npm install express
```

### Basic Example
Here's a simple Express app that serves a "Hello World" page:

```javascript
const express = require('express'); // Import the Express library
const app = express(); // Create an instance of an Express application

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

### Core Concepts
* **Routes:** Define how your app responds to different HTTP methods (GET, POST, etc.) and URLs.

```javascript
app.get('/about', (req, res) => {
  res.send('About page');
});

app.post('/submit', (req, res) => {
  res.send('Form submitted');
});
```

* **Middleware:** Middleware functions modify the req and res objects or end the request-response cycle. Common middleware examples:
  * Body Parsing: express.json() to handle JSON data in requests.
  * Logging: Third-party middleware like morgan.

```javascript
app.use(express.json()); // Parse incoming JSON requests
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next(); // Pass control to the next middleware
});
```

* **Static Files:** Serve static files like images, CSS, or JavaScript.

```javascript
app.use(express.static('public'));
```

### Advanced Topics
* **Routing Parameters:** Define dynamic routes with placeholders.

```javascript
app.get('/user/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});
```

* **Error Handling:** Use a middleware function with four arguments to catch errors.

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
```

* **Integrating Databases:** Combine Express with databases like MongoDB, PostgreSQL, or MySQL for dynamic apps.

### Why Use Express?
* Easy to learn and integrate with Node.js.
* Rich ecosystem of third-party middleware.
* Scalable for small projects or large applications.


## HTTP Methods
HTTP methods are a set of request methods that indicate the action a client wants to perform on a server  
* ```GET``` - Retrieves information from the specified resource, and should only be used to request data(not modify it)(request from server)
* ```POST``` - Sends data to the server for processing, usually resulting in a change in the server state or side effects on the server.
* ```PUT``` - Updates a current resource or creates it if it doesn't exist, with the client providing a complete and updated copy of the resource. 
* ```PATCH``` - Updates parts of an existing resource, with the client providing only parts of the resource that needs to be updated.
* ```DELETE``` - Removes the specified resource from the server.


### Example use-cases
* ```GET```	- return API data.
* ```POST```	- create a new record in a database.
* ```PUT```	-	Modify a record in a database.
* ```DELETE``` - Remove a record from a database.
* ```PATCH``` -	Update specific fields in a record.


### Best Practices for HTTP Event Handlers
* Use Descriptive Routes: Keep routes clear and meaningful (e.g., /api/users).
* Organize Handlers: Use modular design by separating handlers into controllers or separate files.
* Validate Inputs: Validate request data to ensure security and correctness.
* Return Proper Status Codes: Respond with appropriate HTTP status codes (e.g., 200 OK, 404 Not Found, 500 Internal Server Error).
* Handle Errors Gracefully: Use try-catch or error-handling middleware.


## HTTP status codes
HTTP status codes are standardized responses issued by a web server to indicate the result of an HTTP request. These codes help developers understand whether a request was successful, encountered an error, or needs additional actions.

HTTP status codes are divided into five classes, based on the type of response. Each code consists of three digits, with the first digit indicating its category.

### HTTP Status Code Classes
| Class |  Range  |                       Description                       |
|:-----:|:-------:|:-------------------------------------------------------:|
| 1xx   | 100-199 | Informational: Request received, continuing process.    |
| 2xx   | 200-299 | Success: Request successfully processed.                |
| 3xx   | 300-399 | Redirection: Further action needed to complete request. |
| 4xx   | 400-499 | Client Error: Issue with the request from the client.   |
| 5xx   | 500-599 | Server Error: Issue with the server while processing.   |


### Detailed Explanation of Common HTTP Status Codes
#### 1xx: Informational
Informational codes indicate that the request has been received and is being processed.
* 100 Continue: The client should continue sending the request body (used in scenarios like Expect: 100-continue header).
* 101 Switching Protocols: The server is switching protocols as requested (e.g., from HTTP to WebSocket).

#### 2xx: Success
These codes indicate that the request was successfully received, understood, and processed.
* 200 OK: The request was successful, and the response contains the requested data.
  * Example: Fetching a webpage or returning data from an API.
* 201 Created: A new resource has been successfully created.
Example: After submitting a form to create a user account.
* 204 No Content: The request was successful, but there is no content to send in the response.
  * Example: After a successful deletion operation.

#### 3xx: Redirection
These codes indicate that the client needs to take additional action to complete the request.
* 301 Moved Permanently: The resource has been moved to a new URL permanently.
  * Example: Redirecting http://oldsite.com to http://newsite.com.
* 302 Found (or Temporary Redirect): The resource is temporarily located at a different URL.
  * Example: Redirecting during maintenance.
* 304 Not Modified: The resource hasn’t changed since the last request, allowing the client to use its cached version.

#### 4xx: Client Errors
These codes indicate an issue with the client's request.
* 400 Bad Request: The server could not understand the request due to malformed syntax.
  * Example: Sending invalid JSON data.
* 401 Unauthorized: Authentication is required but has failed or not been provided.
  * Example: Accessing an API without a valid API key.
* 403 Forbidden: The server understands the request but refuses to authorize it.
  * Example: Accessing a restricted resource without permission.
* 404 Not Found: The requested resource could not be found on the server.
  * Example: Visiting a nonexistent URL.
* 405 Method Not Allowed: The HTTP method is not supported for the requested resource.
  * Example: Sending a POST request to a route that only accepts GET.

#### 5xx: Server Errors
These codes indicate that the server encountered an error while processing the request.
* 500 Internal Server Error: A generic error indicating something went wrong on the server.
  * Example: A crash in the application code.
* 502 Bad Gateway: The server, acting as a gateway, received an invalid response from an upstream server.
  * Example: Issues with reverse proxies like Nginx.
* 503 Service Unavailable: The server is currently unavailable, often due to overload or maintenance.
  * Example: A site going offline temporarily for updates.
* 504 Gateway Timeout: The server, acting as a gateway, did not receive a timely response from an upstream server.
  * Example: Delayed responses from an external API.

### How to Use HTTP Status Codes Effectively
#### Match the Status Code to the Action:
Use 200 OK for successful fetch requests.
Use 201 Created for successful resource creation.
Use 204 No Content when no body is needed (e.g., successful delete).

#### Handle Errors Gracefully:
* Return meaningful error messages for 400 Bad Request or 401 Unauthorized to guide users.
* Use 404 Not Found for resources that don’t exist instead of showing generic errors.

#### Use Caching with 304 Not Modified:
* Set proper cache headers to optimize client-side performance.

#### Debugging Server Issues:
* Log errors for 500 Internal Server Error to diagnose and fix bugs.

### Summary Table of Key Status Codes
| Code | Description           | Example Use Case                                 |
|------|-----------------------|--------------------------------------------------|
| 200  | OK                    | Fetching a webpage or API response.              |
| 201  | Created               | Successfully creating a new user in a database.  |
| 204  | No Content            | Successful DELETE request with no response body. |
| 301  | Moved Permanently     | Redirecting to a new URL for a resource.         |
| 400  | Bad Request           | Client sends invalid or malformed data.          |
| 401  | Unauthorized          | Missing or invalid API key or credentials.       |
| 403  | Forbidden             | Attempting to access restricted content.         |
| 404  | Not Found             | Requesting a nonexistent endpoint.               |
| 500  | Internal Server Error | A bug or crash in server-side application logic. |
| 503  | Service Unavailable   | Server is down for maintenance or overloaded.    |


## Embeded Javascript(EJS)
Embedded JavaScript (EJS) is a templating engine for Node.js that allows you to embed JavaScript directly within HTML templates. It is commonly used to dynamically generate HTML pages on the server-side by inserting data into placeholders before sending the HTML to the client.

First lets add the ejs extension to our vs code. Press <em> Ctrl+Shift+X</em> and search for EJS language support(should be the first one shown) then install it.


### Key Features of EJS
* **JavaScript Embedded in HTML:** Write JavaScript code inside special tags ```(<% %>)``` to add logic or insert dynamic content.
* **Server-Side Rendering:** Generate HTML on the server using data provided by the application.
* **Lightweight and Simple:** EJS has minimal syntax and is easy to learn for anyone familiar with JavaScript.
* **Reusable Templates:** Allows the use of partials (smaller templates) to modularize views.
* **Customizable:** You can use custom delimiters to suit your needs.

### How EJS Works
* **EJS Template:**
  * Contains HTML code with embedded JavaScript placeholders.
* **Data Injection:**
  * The server injects data into placeholders within the template.
* **Rendered Output:**
  The final HTML, with placeholders replaced by data, is sent to the client.

### Syntax Overview
1. **Outputting Values**
  * Use <%= %> to output values directly into the HTML.
    ```html
    <h1>Welcome, <%= username %>!</h1>
    ```
    Here, ```username``` is a variable provided by the server.

2. **JavaScript Logic**
   * Use <% %> for control flow statements (e.g., if, for, etc.) without outputting.
    ```html
    <% if (userLoggedIn) { %>
      <p>Hello, <%= username %>!</p>
    <% } else { %>
      <p>Please log in.</p>
    <% } %>
    ```

3. **Escaping HTML**
   * Use <%- %> to render raw HTML (avoiding automatic escaping).
    ```html
    <p><%- htmlSnippet %></p>
    ```

### Setting Up EJS
EJS can be easily integrated with a Node.js application, often using the Express framework.

#### Installation
Install EJS using npm:
```bash
npm install ejs
```

### Using EJS with Express
Set EJS as the templating engine in your Express app:
```javascript
const express = require('express');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', './views'); // Set directory for EJS templates
```

Create an EJS template (e.g., ```views/index.ejs```):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home</title>
</head>
<body>
  <h1>Welcome, <%= username %>!</h1>
</body>
</html>
```

Render the template with data in a route:
```javascript
app.get('/', (req, res) => {
  res.render('index', { username: 'John Doe' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

### Advanced Features of EJS
#### Partials
* Reusable snippets of HTML to reduce redundancy.
* Example: partials/header.ejs
```html
<header>
  <h1>Welcome to My Site</h1>
</header>
```

* Include it in another template:
```html
<% include partials/header.ejs %>
```

#### Loops
Iterate over arrays to generate dynamic content:
```html
<ul>
  <% items.forEach(function(item) { %>
    <li><%= item %></li>
  <% }); %>
</ul>
```

#### Custom Delimiters
Change the default ```<% %>``` delimiters to avoid conflicts with other templating systems.
```javascript
const ejs = require('ejs');
ejs.delimiter = '?';
```

#### Layouts
Use layouts to define a common structure for pages.
Example: views/layout.ejs
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title><%= title %></title>
</head>
<body>
  <%- body %>
</body>
</html>
```

Render with the body content:
```javascript
res.render('layout', { title: 'Home', body: '<h1>Welcome!</h1>' });
```

### Benefits of EJS
* Dynamic Content: Easily render dynamic data within HTML templates.
* Familiar Syntax: Uses plain JavaScript for logic, making it beginner-friendly.
* Server-Side Rendering: Improves SEO and initial page load time by delivering pre-rendered HTML.
* Integration: Works seamlessly with Express and other Node.js frameworks.

### Limitations
* Server Dependency: Requires server-side rendering; less effective for highly interactive frontend-heavy applications.
* Performance: Rendering large templates on the server can be slower compared to client-side rendering frameworks (e.g., React).
* Lack of Componentization: Unlike modern frontend frameworks, EJS doesn’t support advanced features like stateful components.

### EJS tags short summary
* ```<%= variable %>``` the equality sign is used to dereference variables.
* ```<% console.log("hello") %>``` used to write javascript code
* ```<%- htmlVar %>``` the minus sign is used to derefernce html code
* ```<%# %>``` hash tag is used for commenting
* ```<%- include("header.ejs")%>``` minus sign with include is used for adding external .ejs files.

### locals  
The **locals** variable in ejs represents the object passed from the server. For example, in the servers code:
```javascript
app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  };
  res.render("index.ejs", data);
}); 
```
The object data would be passed to index.ejs with the name locals. 
[example directory](./passing_data/)



## Notes 
* git clone quake

  