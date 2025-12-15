const App = () => {
  return (
    <>
      <button>Hello</button>
      <p>paragraph</p>
    </>
  );
};

const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container);

root.render(<App />);
