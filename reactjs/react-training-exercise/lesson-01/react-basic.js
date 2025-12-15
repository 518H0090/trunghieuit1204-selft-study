const Ex1a = () => {
  return <button>Good job</button>;
};

const Ex1b = () => {
  const name = "Hieu";

  return <p>My name is {name}</p>;
};

const Ex1c = () => {
  return (
    <div>
      <p>Cotton socks</p>
      <p>Price: $10</p>
      <button>Add to Cart</button>
    </div>
  );
};

const Ex1d = () => {
  const productCost = 10 + 2 * 8;
  console.log(productCost);

  return <p>Product cost: ${productCost}</p>;
};

const Ex1f = () => {
  const productCost = 10 + 2 * 8;
  const shippingCost = 5;
  console.log(productCost);

  return (
    <>
      <p>Product cost: ${productCost}</p>
      <p>Shipping cost: ${shippingCost}</p>
      <p>Total cost: ${productCost + shippingCost}</p>
    </>
  );
};

const Ex1g = dayjs().format("MMMM D");
console.log(Ex1g);

const Ex1h = () => {
  return <p>Today is {Ex1g}</p>;
};

const Ex1i = () => {
  const currentTime = dayjs().format("HH:mm:ss");

  return <p>currentTime {currentTime}</p>;
};

const Ex1j = () => {
  setInterval(() => {
    root.render(<App />);
  }, 1000);
};

const App = () => {
  return (
    <>
      <Ex1a />
      <Ex1b />
      <Ex1c />
      <Ex1d />
      <Ex1f />
      <Ex1h />
      <Ex1i />
      <Ex1j />
    </>
  );
};

const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container);

root.render(<App />);
