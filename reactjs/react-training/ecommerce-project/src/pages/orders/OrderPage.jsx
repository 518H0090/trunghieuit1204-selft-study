import "./OrderPage.css";
import Header from "../../components/Header";
import BuyAgain from "../../assets/images/icons/buy-again.png";
import axios from "axios";
import { useState, useEffect } from "react";
import OrdersGrid from "./OrdersGrid";

const OrderPage = ({ cart }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    })();
  }, []);

  return (
    <>
      <title>Orders</title>
      <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} BuyAgain={BuyAgain} />
      </div>
    </>
  );
};

export { OrderPage };
