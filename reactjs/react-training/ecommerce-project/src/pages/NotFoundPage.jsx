import Header from "../components/Header";
import "./NotFoundPage.css";

function NotFoundPage({ cart }) {
  return (
    <>
      <Header cart={cart} />
      <p>Page not found</p>
    </>
  );
}

export { NotFoundPage };
