const Main = ({ showPassword, setShowPassword }) => {
  return (
    <main>
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
    </main>
  );
};

export default Main;
