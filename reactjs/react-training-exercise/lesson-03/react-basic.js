const Ex3a = () => {
  function clickAlert() {
    console.log("clicked");
  }

  return <button onClick={clickAlert}>Clicked 0 times</button>;
};

const Ex3b = () => {
  const [count, setCount] = React.useState(0);

  function addCount() {
    setCount((prev) => prev + 1);
  }

  return <button onClick={addCount}>Clicked {count} times</button>;
};

const Ex3c = () => {
  const [count, setCount] = React.useState(0);

  function addCount() {
    setCount((prev) => prev + 1);
  }

  return (
    <button onClick={addCount}>
      Clicked {count}
      {count === 1 ? " time" : " times"}
    </button>
  );
};

const Ex3d = () => {
  const [count, setCount] = React.useState(0);

  function addCount() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <button onClick={addCount}>
        Clicked {count}
        {count === 1 ? " time" : " times"}
      </button>
    </>
  );
};

const Ex3e = ({ count, setCount }) => {
  function addCount() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <button onClick={addCount}>
        Clicked {count}
        {count === 1 ? " time" : " times"}
      </button>
    </>
  );
};

const Ex3f = ({ resetButton }) => {
  return (
    <>
      <button onClick={resetButton}>Reset</button>
    </>
  );
};

const Ex3g = () => {
  const [txt, setTxt] = React.useState("");

  function saveChange(e) {
    setTxt(e.target.value);
  }

  return (
    <>
      <input type="text" placeholder="Type a name here" onChange={saveChange} />
      <p>{txt}</p>
    </>
  );
};

const Ex3h = () => {
  const [txt, setTxt] = React.useState("");

  function saveChange(e) {
    setTxt(e.target.value);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Type a name here"
        onChange={saveChange}
        value={txt}
      />
      <button
        onClick={() => {
          setTxt("");
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          setTxt("Hello World With Reactjs");
        }}
      >
        Example
      </button>
      <p>{txt}</p>
    </>
  );
};

const App = () => {
  const [count, setCount] = React.useState(0);

  function resetButton() {
    setCount(0);
  }

  return (
    <>
      <Ex3a />
      <br />
      <br />
      <Ex3b />
      <br />
      <br />
      <Ex3c />
      <br />
      <br />
      <Ex3d />
      <Ex3d />
      <br />
      <br />
      <Ex3e count={count} setCount={setCount} />
      <Ex3e count={count} setCount={setCount} />
      <Ex3f resetButton={resetButton} />
      <br />
      <br />
      <Ex3g />
      <br />
      <br />
      <Ex3h />
    </>
  );
};

const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container);

root.render(<App />);
