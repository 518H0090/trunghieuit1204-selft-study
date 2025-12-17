import Header from "../components/Header";
import "./TrackPage.css";
import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

function TrackPage({ cart }) {
  const { orderId, productId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    (async () => {
      let response = await axios.get(`/api/orders/${orderId}?expand=products`);
      setOrder(response.data);
    })();
  }, [orderId]);

  if (!order) return null;

  const productDetail = order.products.find(
    (item) => item.productId == productId
  );

  const totalDeliveryTimeMs =
    productDetail.estimatedDeliveryTimeMs - order.orderTimeMs;
  console.log("totalDeliveryTimeMs", totalDeliveryTimeMs);
  let timePassedMs = dayjs().valueOf() - order.orderTimeMs;
  timePassedMs = totalDeliveryTimeMs * 0.3;
  console.log("timePassedMs", timePassedMs);
  const deliveryProgress = (timePassedMs / totalDeliveryTimeMs) * 100;
  console.log("deliveryProgress", deliveryProgress);
  const deliveryPercent = deliveryProgress > 100 ? 100 : deliveryProgress;
  console.log("deliveryPercent", deliveryPercent);

  const isPreparing = deliveryPercent < 33;
  const isShipped = deliveryPercent >= 33 && deliveryPercent < 100;
  const isDelivered = deliveryPercent === 100;

  return (
    <>
      <title>Track package</title>
      <link rel="icon" type="image/svg+xml" href="tracking-favicon.png" />

      <Header cart={cart} />

      {order && (
        <div className="tracking-page">
          <div className="order-tracking">
            <Link className="back-to-orders-link link-primary" to="/orders">
              View all orders
            </Link>

            <div className="delivery-date">
              {deliveryPercent >= 100 ? "Delivered on" : "Arriving on"}
              {dayjs(productDetail.estimatedDeliveryTimeMs).format(
                "dddd, MMMM D"
              )}
            </div>

            <div className="product-info">{productDetail.product.name}</div>

            <div className="product-info">
              Quantity: {productDetail.quantity}
            </div>

            <img className="product-image" src={productDetail.product.image} />

            <div className="progress-labels-container">
              <div
                className={`progress-label ${isPreparing && "current-status"}`}
              >
                Preparing
              </div>
              <div
                className={`progress-label ${isShipped && "current-status"}`}
              >
                Shipped
              </div>
              <div
                className={`progress-label ${isDelivered && "current-status"}`}
              >
                Delivered
              </div>
            </div>

            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${deliveryPercent}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { TrackPage };
