function LoginForm() {
  return (
    <div>
      <input type="text" placeholder="Email" />
      <br />
      <input type="password" placeholder="Password" />
      <br />
      <button>Login</button>
      <button>Sign up</button>
    </div>
  );
}

const ProductDetails = (props) => {
  const { name, price, discountPrice, imageSrc } = props;

  return (
    <div
      style={{
        display: "inline-block",
        marginRight: "20px",
        border: "1px solid black",
      }}
    >
      <img style={{ width: "120px" }} src={imageSrc} />
      <p>{name}</p>

      {!discountPrice && <p>Price: ${price}</p>}
      {discountPrice && (
        <del>
          <p>Price: ${price}</p>
        </del>
      )}
      {discountPrice && <p>Discount price: ${discountPrice}</p>}
      <button>Add to Cart</button>
    </div>
  );
};

function App() {
  return (
    <>
      <p>Hello, welcome to my website</p>
      <LoginForm />
      <ProductDetails
        name="Cotton socks"
        price="10.90"
        discountPrice="5.45"
        imageSrc="./thumbnails/cotton-socks.png"
      />
      <ProductDetails
        name="Tennis balls"
        price="6.00"
        imageSrc="./thumbnails/tennis-balls.png"
      />
      <ProductDetails
        name="Plain T-Shirt"
        price="7.99"
        imageSrc="./thumbnails/plain-t-shirt.png"
      />
    </>
  );
}

const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container);
root.render(<App />);
