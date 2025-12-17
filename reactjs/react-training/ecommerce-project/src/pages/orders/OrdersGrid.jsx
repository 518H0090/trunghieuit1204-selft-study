import OrderHeader from "./OrderHeader";
import OrderDetailGrid from "./OrderDetailGrid";

function OrdersGrid({ orders, BuyAgain }) {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">
            <OrderHeader order={order} />

            <OrderDetailGrid order={order} BuyAgain={BuyAgain} />
          </div>
        );
      })}
    </div>
  );
}

export default OrdersGrid;
