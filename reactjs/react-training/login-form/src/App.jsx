import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container">
      <Header />
      <Main showPassword={showPassword} setShowPassword={setShowPassword} />
      <Footer />
    </div>
  );
}

export default App;
