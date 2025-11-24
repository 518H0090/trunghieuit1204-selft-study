const socksPrice = 10;
const tShirtPrice = 8;
let productCost = socksPrice + 2 * tShirtPrice;
console.log(productCost);
const shippingCost = 5;
let totalCost = productCost + shippingCost;
const currentDate = dayjs().format("MMMM D");
console.log(currentDate);

let div = (
  <>
    <button>Good job!</button>
    <p>My name is {"Hieu"}</p>
    <p>Cotton socks</p>
    <p>Price: $10</p>
    <button>Add to Cart</button>
    <p>Product cost: ${productCost}</p>
    <p>Shipping cost: ${shippingCost}</p>
    <p>Total cost: ${totalCost}</p>
    <p>Today is {currentDate}</p>
  </>
);

const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container);
root.render(div);

setInterval(() => {
  const currentTime = dayjs().format("HH:mm:ss");
  div = (
    <>
      <button>Good job!</button>
      <p>My name is {"Hieu"}</p>
      <p>Cotton socks</p>
      <p>Price: $10</p>
      <button>Add to Cart</button>
      <p>Product cost: ${productCost}</p>
      <p>Shipping cost: ${shippingCost}</p>
      <p>Total cost: ${totalCost}</p>
      <p>Today is {currentDate}</p>
      <p>Current time: {currentTime}</p>
    </>
  );

  root.render(div);
}, 1000);
