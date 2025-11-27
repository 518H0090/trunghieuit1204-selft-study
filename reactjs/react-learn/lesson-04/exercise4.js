function Ex4A() {
  return (
    <>
      <button className="ex4a">on</button>
    </>
  );
}

function Ex4B() {
  const [isButtonOn, setIsButtonOn] = React.useState(false);

  return (
    <>
      <button
        className="ex4b"
        onClick={() => {
          setIsButtonOn(!isButtonOn);
        }}
      >
        {isButtonOn ? "on" : "off"}
      </button>
    </>
  );
}

function Ex4C() {
  const [isButtonOn, setIsButtonOn] = React.useState(false);

  return (
    <>
      <button
        className={isButtonOn ? "ex4c" : "ex4c-off"}
        onClick={() => {
          setIsButtonOn(!isButtonOn);
        }}
      >
        {isButtonOn ? "on" : "off"}
      </button>
    </>
  );
}

function Ex4D() {
  return (
    <div className="ex4d">
      <p>Hello, welcome to my website</p>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
      <button>Sign up</button>
    </div>
  );
}

function Ex4E() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="ex4e">
      <p>Hello, welcome to my website</p>
      <input type="text" placeholder="Email" />
      <div>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
        />
        <button
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          Show
        </button>
      </div>
      <button>Login</button>
      <button>Sign up</button>
    </div>
  );
}

function EX4F() {
  const [time, setTime] = React.useState(dayjs().format("HH:mm:ss"));

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(dayjs().format("HH:mm:ss"));
      console.log("run code");
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <>
      <p className="ex4f">Current time : {time}</p>
    </>
  );
}

function EX4G() {
  const [time, setTime] = React.useState(dayjs().format("HH:mm:ss"));

  React.useEffect(() => {
    setInterval(() => {
      setTime(dayjs().format("HH:mm:ss"));
      console.log("run code");
    }, 1000);
  }, []);

  return (
    <>
      <p className="ex4f">Current time : {time}</p>
    </>
  );
}

function EX4H() {
  const [count, setCount] = React.useState(0);
  const buttonRef = React.useRef(null);

  function AddCount() {
    setCount(count + 1);
  }

  function ResetCount() {
    setCount(0);
  }

  function AutoCount() {
    const buttonElem = buttonRef.current;

    setInterval(() => {
      if (buttonElem) {
        buttonElem.click();
      }
    }, 1000);
  }

  return (
    <>
      <button onClick={AddCount} ref={buttonRef}>
        Clicked {count === 1 ? `${count} time` : `${count} times`}
      </button>
      <button onClick={ResetCount}>Reset</button>
      <button onClick={AutoCount}>Auto Click</button>
    </>
  );
}

function EX4HControl() {
  const [count, setCount] = React.useState(0);
  const intervalRef = React.useRef(null);

  function AddCount() {
    setCount((prev) => prev + 1);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function ResetCount() {
    setCount(0);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function AutoCount() {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }

  React.useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <>
      <button onClick={AddCount}>
        Clicked {count === 1 ? `${count} time` : `${count} times`}
      </button>
      <button onClick={ResetCount}>Reset</button>
      <button onClick={AutoCount}>Auto Click</button>
    </>
  );
}

function EX4I() {
  const [count, setCount] = React.useState(0);
  const intervalRef = React.useRef(null);

  function AddCount() {
    setCount((prev) => prev + 1);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function ResetCount() {
    setCount(0);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function AutoCount() {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }

  React.useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="ex4i">
      <button onClick={AddCount}>
        Clicked {count === 1 ? `${count} time` : `${count} times`}
      </button>
      <button onClick={ResetCount}>Reset</button>
      <button onClick={AutoCount}>Auto Click</button>
    </div>
  );
}

const App = () => {
  return (
    <>
      <Ex4A />
      <Ex4B />
      <Ex4C />
      <Ex4D />
      <Ex4E />
      <EX4F />
      <EX4G />
      <EX4H />
      <EX4HControl />
      <EX4I />
    </>
  );
};

const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container);
root.render(<App />);
