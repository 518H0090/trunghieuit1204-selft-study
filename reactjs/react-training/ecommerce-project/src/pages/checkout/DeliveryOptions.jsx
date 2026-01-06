import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";
import axios from "axios";

function DeliveryOptions({ deliveryOptions, cartItem, loadCart }) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((item) => {
        let priceString = "FREE shipping";
        if (item.priceCents > 0) {
          priceString = `${formatMoney(item.priceCents)} - shipping`;
        }

        const updateDeliveryOption = async () => {
          await axios.put(`/api/cart-items/${cartItem.id}`, {
            deliveryOptionId: item.id,
          });

          await loadCart();
        };

        return (
          <div
            key={item.id}
            className="delivery-option"
            onClick={updateDeliveryOption}
          >
            <input
              type="radio"
              checked={item.id === cartItem.deliveryOptionId}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(item.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
              </div>
              <div className="delivery-option-price">{priceString}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DeliveryOptions;
