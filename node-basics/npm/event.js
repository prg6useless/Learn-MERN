const event = require("events");

const myEvent = new event.EventEmitter();

// create

// const sayHello = () => {
//   console.log("hello");
// };

// eventTest.on("test", sayHello);

// eventTest.emit("test");

const product = {
  name: "ToolBox",
  price: 1000,
  qty: 1,
};

// create
const calcTax = (product) => 0.1 * product.price;

// listen
myEvent.on("addToCart", (product) => {
  const result = calcTax(product);
  console.log({ result });
});

// fire
myEvent.emit("addToCart", product);

// api and microservice are two different architectures

// events are used to build microservices

// both api and microservices require modules

// api waits for response

// events dont wait for responses

// events are used for RTC, Real Time Communication
