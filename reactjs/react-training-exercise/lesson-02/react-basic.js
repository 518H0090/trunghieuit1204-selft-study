const LoginForm = () => {
  return (
    <>
      <p>Hello, welcome to my website</p>
      <input type="text" name="email" placeholder="Email" />
      <br />
      <input type="password" name="password" placeholder="Password" />
      <br />
      <button>Login</button>
      <button>Sign up</button>
    </>
  );
};

const Ex2e = () => {
  return (
    <div>
      <p>Cotton socks</p>
      <p>Price: $10.90</p>
      <button>Add to Cart</button>
    </div>
  );
};

const ProductDetails = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        columnGap: " 10px",
        marginTop: "10px",
      }}
    >
      <img
        style={{ width: "40px", borderRadius: " 100%" }}
        src={props.imageSrc}
      />
      <p>{props.name}</p>
      {props.discountPrice ? (
        <del>Price: ${props.price}</del>
      ) : (
        <p>Price: ${props.price}</p>
      )}
      {props.discountPrice && <p>Discount price: ${props.discountPrice}</p>}
      <button
        style={{
          padding: "10px 18px",
          borderRadius: "8px",
          border: "1px solid grey",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

const App = () => {
  return (
    <>
      <LoginForm />
      <Ex2e />
      <ProductDetails
        name="Tennis balls"
        price="6.00"
        imageSrc="./tennis-balls.png"
      />
      <ProductDetails
        name="Plain T-Shirt"
        price="7.99"
        imageSrc="./plain-t-shirt.png"
      />
      <ProductDetails
        name="Cotton socks"
        price="10.90"
        imageSrc="./cotton-socks.png"
        discountPrice="5.45"
      />
    </>
  );
};

const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container);

root.render(<App />);
