// use axios
const products = document.getElementById("products");

const instance = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 1000,
});

const getProducts = async (url) => {
  try {
    const { data } = await instance.get(url);
    console.log(data);
    data.products.map((product) => {
      const div = document.createElement("div");
      div.innerHTML = `
              <h3>${product.title}</h3>
              <p>${product.price}</p>
              <p>${product.description}</p>
          `;
      products.appendChild(div);
    });
  } catch (error) {
    console.log(error);
  }
};
