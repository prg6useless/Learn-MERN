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

//Strive for consistency
//Cater to universal usability
//Offer informative feedback
//Design dialogues to yeild closure
//Prevent errors
//permit easy reversal of actions
//Support internal locus of control
//reduce short term memory load









//strive for consistency.
//Cater to universal usability
//offer informative feedback
//design dialgues to yeild clsure.
//prevent errors.
//permit easy recovery of actions
//support internal locus of control
//reduce short term memory load