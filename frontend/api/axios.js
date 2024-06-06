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

const login = async () => {
  try {
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const payload = {
      username: email,
      password,
    };
    const controller = new AbortController();
    const { data } = await instance.post("/auth/login", payload, {
      signal: controller.signal,
    });
    localStorage.setItem("userCredentials", JSON.stringify(data));
    sessionStorage.setItem("userCredentials", JSON.stringify(data));
    const userInfo = localStorage.getItem("userCredentials");
    document.getElementById("userInfo").innerHTML = userInfo;
  } catch (error) {
    console.log(error);
  }
};

const getData = async () => {
  try {
    const controller = new AbortController();

    const { token } = JSON.parse(localStorage.getItem("userCredentials"));
    console.log(token);
    const { data } = await instance.get(
      "/auth/me",
      (headers = {
        Authorization: `Bearer ${token}`,
      }),
      {
        signal: controller.signal,
      }
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
