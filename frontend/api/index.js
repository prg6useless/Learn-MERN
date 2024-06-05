const getProducts = async (url) => {
  // using .then method
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  
  // using async await
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log({ data });
  } catch (error) {
    console.error(error);
  }
};

getProducts("https://dummyjson.com/products");

//  FETCH API
//     - The Fetch API provides an interface for fetching resources (including across the network).
//     - It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.
//     - The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses.
//     - It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.
//     - This kind of functionality was previously achieved using XMLHttpRequest. Fetch provides a better alternative that can be easily used by other technologies such as Service Workers.
//     - Fetch also provides a single logical place to define other HTTP-related concepts such as CORS and extensions to HTTP.
//     - The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request, whether it is successful or not.
//     - You can also optionally pass in an init options object as the second argument (see Request).
//     - The fetch() method can optionally accept a second parameter, an init object that allows you to control a number of different settings:
//         - method: The request type, e.g., GET, POST.
//         - headers: Any headers you want to add to your request, contained within a Headers object or an object literal with ByteString values.
//         - body: Any body that you want to add to your request: this can be a Blob, BufferSource, FormData, URLSearchParams, USVString, or ReadableStream object. Note that a request using the GET or HEAD method cannot have a body.
//         - mode: The mode you want to use for the request, e.g., cors, no-cors, same-origin, or navigate.
//         - credentials: The request credentials you want to use for the request: omit, same-origin, or include. To automatically send cookies for the current domain, this option must be provided. This is a new property that was not present in XMLHttpRequest.
//         - cache: The cache mode you want to use for the request.
//         - redirect: The redirect mode to use: follow, error, or manual. In Chrome the default is follow, but this is not the case in other browsers.
//         - referrer: A USVString specifying no-referrer, client, or a URL. The default is client.
//         - referrerPolicy: Specifies the value of the referer HTTP header.
// https://dummyjson.com/products

//  Axios
//     - Axios is a promise-based HTTP client for the browser and Node.js.
//     - Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations.
//     - Axios is a popular, promise-based HTTP client that sports an easy-to-use API and can be used in both the browser and Node.js.

// ADVANCED
// Axios Instance
//     - Axios instances allow you to create reusable configurations for your requests.
//     - Axios can be used to perform CRUD operations on REST endpoints.
// Timeout
//     - Axios allows you to set a timeout for your requests.
// Abort Controller
//     - Axios allows you to cancel requests using the AbortController interface.

// Mid Level Engineer
// Interceptors
//     - Axios interceptors allow you to run your code or modify the request and response before the request and response are sent and received.
// Transformer
//     - Axios allows you to transform the request and response data before they are sent and received.
