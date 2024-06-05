// fetch -> used for browser
// const axios = require("axios");
const products = document.getElementById("products");
const instance = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 1000,
  // headers: { "X-Custom-Header": "foobar" },
});

const getProducts = async (url) => {
  try {
    const controller = new AbortController();
    const { data } = await instance.get(url, {
      signal: controller.signal,
    });
    console.log(data);
    // const data = getProducts("/products");

    data.products.map((product) => {
      const productElement = document.createElement("div");
      productElement.innerHTML = `
        <h2>${product.title}</h2>
        <p>${product.price}</p>
        <p>${product.description}</p>
      `;
      products.appendChild(productElement);
    });

    controller.abort();
  } catch (error) {
    console.log(error);
  }
};

// getProducts("/products");
