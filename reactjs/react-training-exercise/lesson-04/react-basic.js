const Ex4a = () => {
  return <button className="ex4a-button">on</button>;
};

const Ex4b = () => {
  const [isButtonOn, setIsButtonOn] = React.useState(false);

  const changeStatus = () => {
    setIsButtonOn((prev) => !prev);
  };

  return (
    <button className="ex4b-button" onClick={changeStatus}>
      {isButtonOn ? "on" : "off"}
    </button>
  );
};

const Ex4c = () => {
  const [isButtonOn, setIsButtonOn] = React.useState(false);

  const changeStatus = () => {
    setIsButtonOn((prev) => !prev);
  };

  return (
    <button
      className={`ex4c-button ${!isButtonOn && "ex4c-button--off"}`}
      onClick={changeStatus}
    >
      {isButtonOn ? "on" : "off"}
    </button>
  );
};

const Ex4d = () => {
  return (
    <div className="ex4d">
      <p>Hello, welcome to my website</p>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
      <button>Sign up</button>
    </div>
  );
};

const Ex4e = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="ex4d">
      <p>Hello, welcome to my website</p>
      <input type="text" placeholder="Email" />
      <div>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
        />
        <button onClick={() => setShowPassword((prev) => !prev)}>
          {!showPassword ? "show" : "hide"}
        </button>
      </div>
      <button>Login</button>
      <button>Sign up</button>
    </div>
  );
};

const Ex4f = () => {
  const [currentTime, setCurrentTime] = React.useState("");

  React.useEffect(() => {
    setInterval(() => {
      setCurrentTime(dayjs().format("HH:mm:ss"));
    }, 1000);
  }, []);

  return <p>Current time: {currentTime}</p>;
};

const Ex4g = () => {
  const [currentTime, setCurrentTime] = React.useState("");

  React.useEffect(() => {
    setInterval(() => {
      setCurrentTime(dayjs().format("HH:mm:ss"));
      console.log("run code");
    }, 1000);
  }, []);

  return <p>Current time: {currentTime}</p>;
};

const Ex4h = () => {
  const [count, setCount] = React.useState(0);
  const buttonRef = React.useRef(null);

  const autoClick = () => {
    setInterval(() => {
      const buttonElem = buttonRef.current;

      if (buttonElem) {
        buttonElem.click();
      }
    }, 1000);
  };

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)} ref={buttonRef}>
        Clicked {count} {count === 1 ? "time" : "times"}
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={autoClick}>Auto Click</button>
    </>
  );
};

const Ex4i = () => {
  const [count, setCount] = React.useState(0);
  const intervalRef = React.useRef(null);

  const addCount = () => {
    setCount((prev) => prev + 1);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetCount = () => {
    setCount(0);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const autoClick = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  return (
    <div className="ex4i">
      <button onClick={addCount}>
        Clicked {count} {count === 1 ? "time" : "times"}
      </button>
      <button onClick={resetCount}>Reset</button>
      <button onClick={autoClick}>Auto Click</button>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Ex4a />
      <Ex4b />
      <Ex4c />
      <Ex4d />
      <Ex4e />
      <Ex4f />
      <Ex4g />
      <Ex4h />
      <Ex4i />
    </>
  );
};

const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container);

root.render(<App />);
