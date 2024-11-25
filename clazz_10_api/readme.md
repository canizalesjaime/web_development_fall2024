# Class 11 API and databases

## Table of contents:
1. Links
2. JSON
3. API 
4. Axios
5. Rest API
6. Write your own API
7. Postman
   

##  Links
* [axios doc](https://axios-http.com/docs/post_example)


##  JSON
**JSON (JavaScript Object Notation)** is a lightweight data format used for storing and exchanging data. It’s easy for humans to read and write, and easy for machines to parse and generate. Although JSON is derived from JavaScript, it is language-independent and widely supported by many programming languages.

### Key Concepts of JSON
1. Data is in Key-Value Pairs:
   * Each piece of data is represented as a key-value pair:
```json
{
  "key": "value"
}
```

  * Example:
```json
{
  "name": "Alice",
  "age": 25
}
```

2. Data is Organized into Objects and Arrays:
   * Object: A collection of key-value pairs, enclosed in curly braces {}.
```json
{
  "name": "Alice",
  "age": 25,
  "isStudent": true
}
```

   * Array: An ordered list of values, enclosed in square brackets [].
```json
[
  "Alice",
  "Bob",
  "Charlie"
]
```

3. Data Types in JSON:
   * String: Text enclosed in double quotes.
```json
"example"
```

   * Number: Integers or floating-point numbers.
```json
123
```

   * Boolean: true or false.
```json
true
```

   * Null: Represents an empty value.
```json
null
```

   * Object: A collection of key-value pairs.
```json
{ "key": "value" }
```

   * Array: An ordered list of values.
```json
[1, 2, 3]
```

4. Syntax Rules:
   * Keys must be strings enclosed in double quotes.
   * Values can be any valid JSON data type.
   * Data must be separated by commas.
   *  Objects and arrays must have matching braces or brackets.

### Example JSON File:
```json
{
  "name": "Alice",
  "age": 25,
  "isStudent": false,
  "courses": ["Math", "Science", "History"],
  "address": {
    "city": "New York",
    "zipCode": "10001"
  }
}
```

### Why JSON is Popular:
* Simplicity: Easy to write and understand.
* Lightweight: Minimal syntax overhead.
* Language-Independent: Can be used with virtually any programming language.
* Widely Used: Common in APIs for exchanging data between a client and server.

### Use Cases:
* Web APIs: JSON is used to transfer data between a client and server.
* Configuration Files: JSON is used for app and system configurations.
* Data Storage: Suitable for lightweight storage in applications.

### Useful Jacascripts functions for JSON
* obj=JSON.parse(json_data) - convert a JSON file into an array of objects.
* json_data=JSON.stringify(obj) -convert the array back to a JSON format.

Check out [JSON repo](./JSON/) for examples. 


##  API
An API (Application Programming Interface) is a set of rules and protocols that allows two software applications or systems to communicate and interact with each other. It acts as a bridge between different systems, enabling them to share data and functionalities without exposing their internal workings.

### Key Components of an API:
1. **Endpoints:** Specific URLs where the API can be accessed. Each endpoint corresponds to a specific function or data request.
2. **Requests and Responses:**
  * **Request:** Made by the client to the API, specifying what action or data is needed.
  * **Response:** The data or result returned by the API to the client.
3. **Methods/Verbs:** Common HTTP methods include:
  * ```GET:``` Retrieve data.
  * ```POST:``` Submit data.
  * ```PUT:``` Update existing data.
  * ```DELETE:``` Remove data.
4. **Authentication and Authorization:** Many APIs require credentials (e.g., API keys, tokens) to ensure secure access.
5. **Data Formats:** APIs typically use standardized data formats like JSON or XML for communication.

### Types of APIs:
**Web APIs:** Accessible over the internet, such as REST (Representational State Transfer) or SOAP (Simple Object Access Protocol) APIs.
**Library APIs:** Embedded within software libraries, enabling interaction with specific functions or features.
**Operating System APIs:** Allow applications to interact with the operating system.
**Hardware APIs:** Used to communicate with hardware components, like a printer or camera.

### Example of How APIs Work:
Let’s say you use a weather app:
1. The app sends a ```GET``` request to a weather API with your location.
2. The API retrieves data from its database (like temperature and conditions) and sends it back as a response.
3. The app displays this data to you in a user-friendly way.

### Why APIs Are Important:
* **Efficiency:** Allow developers to reuse code and integrate pre-built functionalities.
* **Interoperability:** Enable different systems to work together.
* **Scalability:** Make it easier to expand applications by connecting them with external tools or data.
APIs are essential in modern software development, powering everything from social media integrations to cloud services and e-commerce platforms.


## Axios
Axios is a promise-based JavaScript library that simplifies making HTTP requests to interact with APIs, both in the browser and in Node.js environments. It provides an easy-to-use interface with advanced features, making it a popular choice for developers building web or server-side applications.

### Why Use Axios?
1. Simplifies HTTP Requests:
  * Handles API requests like GET, POST, PUT, and DELETE with minimal configuration.
  * Automatically converts JSON data for sending and receiving.

2. Cross-Browser Compatibility:
  * Works seamlessly in all modern browsers.
  * Manages inconsistencies between browsers that can arise with native fetch.

3. Promise-Based:
   * Uses Promises to handle asynchronous requests, simplifying error handling with .then() and .catch() or async/await.

4. Powerful Features:
  * Request and response interceptors.
  * Automatic timeout handling.
  * Custom headers support.
  * Query parameter serialization.
  * Request cancellation.

5. Runs on Both Client and Server:
  * In browsers, it uses XMLHttpRequest under the hood.
  * In Node.js, it uses the native http or https modules.

### Installing Axios
Install Axios via npm, or a CDN.

Using npm:
```bash
npm install axios
```

Via CDN: Add this script to your HTML:
```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

### Basic Axios Usage
1. GET Request
Retrieve data from a server:

```javascript
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data); // Access the data from the response
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

2. POST Request
Send data to a server:
```javascript
axios.post('https://api.example.com/users', {
    name: 'John Doe',
    email: 'john@example.com'
  })
  .then(response => {
    console.log('User created:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

3. Using Async/Await
Handle requests with modern JavaScript syntax:

```javascript
(async () => {
  try {
    const response = await axios.get('https://api.example.com/data');
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
})();
```

### Advanced Axios Features
1. Custom Headers
Send additional headers with a request:

```javascript
axios.get('https://api.example.com/data', {
  headers: {
    Authorization: 'Bearer YOUR_TOKEN'
  }
})
.then(response => console.log(response.data));
```
2. Query Parameters
Send query parameters in the request:

```javascript
Copy code
axios.get('https://api.example.com/data', {
  params: {
    userId: 123,
    status: 'active'
  }
})
.then(response => console.log(response.data));
```
3. Setting a Timeout
Abort a request if it takes too long:
```javascript
axios.get('https://api.example.com/data', {
  timeout: 5000 // Timeout after 5 seconds
})
.then(response => console.log(response.data))
.catch(error => console.error('Timeout or other error:', error));
```

4. Interceptors
Modify requests or handle responses globally:

```javascript
// Add a request interceptor
axios.interceptors.request.use(config => {
  console.log('Request sent:', config);
  return config;
}, error => Promise.reject(error));

// Add a response interceptor
axios.interceptors.response.use(response => {
  console.log('Response received:', response);
  return response;
}, error => Promise.reject(error));
```

5. Canceling Requests
Abort a request if it's no longer needed:

```javascript
const controller = new AbortController();

axios.get('https://api.example.com/data', {
  signal: controller.signal
}).then(response => console.log(response.data))
  .catch(error => console.error('Request canceled:', error));

// Cancel the request
controller.abort();
```

### Axios Response Object
When a request is successful, Axios provides a response object with the following properties:
* data: The response body (parsed JSON or other content).
* status: HTTP status code (e.g., 200 for success).
* statusText: HTTP status text (e.g., "OK").
* headers: The response headers.
* config: The request configuration used.

Example:
```javascript
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);       // Access the response data
    console.log(response.status);     // Access HTTP status code
    console.log(response.headers);    // Access response headers
  });
```

Summary
Axios is a robust and feature-rich library that simplifies making HTTP requests, handling responses, and managing advanced features like interceptors and cancellation. It’s ideal for applications where clean and readable code is a priority.


### Rest Api
A REST API is an architectural style for an application programming interface 
that uses HTTP requests(get,post,put,patch,delete) to access and use data. The
data is then communicated using JSON. Check out [rest api example](./rest_apis/)
to see a rest api with all http methods used.

### API Authentication
4 levels:
1. No authentication for api required
2. user authentication(basic) - requires the user to create an account with a password to get acces to certain API calls.
3. API Key authorization - requires you to use some key generated by the api to access certain API calls.
4. Bearer Token is the most secure in this list, and is a combination of 2 and 3(a key for a user). 

Use postman or the api calls from [https://secrets-api.appbrewery.com](https://secrets-api.appbrewery.com), to create an account, generate an api key, and generate a bearer token. Then copy over you credentials to the file [index.js](./api_authentication/index.js). Run the server and try out the different levels of authentication!

### Write your own API
If you are curious, check out [DIY_API](./DIY_API/) for how to create your own API. Its basically just running your own express server!

## Postman
**Postman** is a widely-used API development and testing tool that simplifies the process of interacting with APIs. It provides an intuitive user interface to design, test, and document APIs, making it popular among developers and teams working with web services.

### What is Postman?
Postman acts as an API client that allows developers to:
* Send HTTP requests (GET, POST, PUT, DELETE, etc.).
* Inspect responses, including headers, body, and status codes.
* Test APIs without needing to write client-side code initially.
* Automate API testing and documentation.

### Core Features

#### Sending Requests
* Postman enables sending HTTP requests to APIs and viewing the response in real-time.
* Supported request types include:
  * **GET:** Fetch data from the server.
  * **POST:** Send data to the server.
  * **PUT/PATCH:** Update existing data.
  * **DELETE:** Remove data.

#### Collections
* Organize requests into collections for better management.
* Collections can group related requests for a project, making them easy to test and share.

#### Environment Variables
* Define variables (e.g., ```{{base_url}}```) for dynamic values across requests.
* Useful for switching between environments like development, staging, and production.

#### Pre-Request and Test Scripts
* Write JavaScript-based scripts to automate tasks:
  * Pre-Request Scripts: Run before a request is sent (e.g., adding authentication tokens).
  * Test Scripts: Validate responses and set conditions (e.g., checking for ```200 OK```).

#### Authentication Support
* Supports various authentication methods:
  * API keys
  * OAuth 2.0
  * Basic authentication
  * Bearer tokens

#### API Testing
* Automate testing using test scripts to validate endpoints and responses.
* Example: Check if a response status is 200:

```javascript
pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});
```

#### Mock Servers
* Create mock servers to simulate API responses during development.

#### Documentation
* Auto-generate and host API documentation from your requests.
* Share with your team for collaborative API development.

#### Monitoring
* Schedule tests and monitor API performance over time.

### How to Use Postman: A Basic Workflow
1. **Install Postman:**
   * Download from [Postman's website](https://www.postman.com/downloads/) or use the web version.

2. **Send a Request:**
   * Open Postman and create a new request.
   * Choose the HTTP method (e.g., GET, POST).
   * Enter the API endpoint URL.
   * Add query parameters, headers, or body content if needed.
   * Click "Send" to see the response.

3. **Use Collections:**
   * Save the request to a collection for reuse.
   * Organize multiple requests under a single collection (e.g., for a project).

4. **Environment Variables:**
   * Define a variable (e.g., ```{{api_key}}```) in the Environment tab.
   * Reference it in requests for easy updates.

5. Write Tests:
* In the "Tests" tab, write assertions to validate the response.
Example:
```javascript
pm.test("Response time is less than 200ms", function () {
  pm.expect(pm.response.responseTime).to.be.below(200);
});
```

6. Generate Documentation:
* Use the "Publish Docs" feature to create and share documentation.

### Postman Benefits
* **User-Friendly:** No need for code to test APIs initially.
* **Time-Saving:** Automates repetitive tasks like testing and documentation.
* **Collaboration:** Teams can share collections, environments, and documentation.
* **Comprehensive:** Supports complex workflows with scripting, variables, and automation.

### Advanced Features
* **Integration with CI/CD Pipelines:** Automate tests using Newman, Postman’s CLI.
* **API Versioning:** Manage different versions of APIs.
* **Team Workspaces:** Collaborate with teams on shared collections and environments.

Postman is an indispensable tool for developers working with APIs, from debugging to testing and deployment.


## Notes
* [class video](https://www.youtube.com/watch?v=mYozLEMmJrA)
  