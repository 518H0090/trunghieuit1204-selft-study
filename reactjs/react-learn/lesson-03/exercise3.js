const ButtonCount = ({ bothCount, setBothCount }) => {
  const [count, setCount] = React.useState(0);

  const clickCountTimes = () => {
    console.log("Clicked");
    setCount(count + 1);
  };

  const clickCountBothTimes = () => {
    console.log("Clicked");
    setBothCount(bothCount + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <>
      <button onClick={clickCountTimes}>
        Clicked {count}
        {count === 1 ? " time" : " times"}
      </button>
      <br />

      <button onClick={clickCountBothTimes}>
        Clicked {bothCount}
        {bothCount === 1 ? " time" : " times"}
      </button>

      <br />

      <button onClick={resetCount}>Reset Count</button>

      <br />
      <br />
    </>
  );
};

const InputText = () => {
  const [text, setText] = React.useState("");

  const resetContext = () => {
    setText("");
  };

  const setExampleContext = () => {
    setText("Hello this is an example, I will set anything for you in here");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Type a name here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div>
        <button onClick={resetContext}>Reset</button>
        <button onClick={setExampleContext}>Example</button>
      </div>

      <p>{text}</p>
    </>
  );
};

const App = () => {
  const [bothCount, setBothCount] = React.useState(0);

  const resetCountBoth = () => {
    setBothCount(0);
  };

  return (
    <>
      <ButtonCount bothCount={bothCount} setBothCount={setBothCount} />
      <ButtonCount bothCount={bothCount} setBothCount={setBothCount} />

      <br />
      <button onClick={resetCountBoth}>Reset Both Count</button>

      <br />
      <br />

      <InputText />
    </>
  );
};

const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container);
root.render(<App />);
