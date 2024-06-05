// use fetch api

const getProducts = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.products);
  } catch (error) {
    console.log(error);
  }
};

getProducts("https://dummyjson.com/products");
