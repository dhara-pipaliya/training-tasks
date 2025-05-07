import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useContext, useState } from "react";
import {
  IOrderSundaeContext,
  OrderSundaeContext,
} from "../../../context/orderSundae";
import styles from "../orderSummary/orderSummary.module.scss";

interface IProps {
  setStep: (step: number) => void;
}

const OrderSummary = (props: IProps) => {
  const { setStep } = props;
  const { scoopData, toppingData, calculateTotal, calculateGrandTotal } =
    useContext<IOrderSundaeContext>(OrderSundaeContext);
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState(false);

  const handelError = () => {
    if (!agree) {
      setError(true);
    } else {
      setError(false);
      setStep(3);
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.backPage} onClick={() => setStep(1)}>
          <ArrowBackIosIcon />
          Back
        </div>
        <div className={styles.order}>{`Order summary`}</div>
        <div className={styles.totalPrice}>
          <div className={styles.total}>{`Scoop:`}</div>
          <div className={styles.icon}>
            <CurrencyRupeeIcon />
            {calculateTotal(scoopData)}
          </div>
        </div>
        <ul className={styles.contain}>
          {scoopData
            .filter((item) => item.quantity > 0)
            .map((item) => (
              <div className={styles.itemList}>
                <li>
                  {item.quantity}
                  <span>{item.name}</span>
                </li>
              </div>
            ))}
        </ul>
        <div className={styles.totalPrice}>
          <div className={styles.total}>{`Toppings:`}</div>
          <div className={styles.icon}>
            <CurrencyRupeeIcon />
            {calculateTotal(toppingData)}
          </div>
        </div>
        <ul className={styles.contain}>
          {toppingData
            .filter((item) => item.quantity)
            .map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
        </ul>
        <div className={styles.totalPrice}>
          <div className={styles.total}>{`Total:`}</div>
          <div className={styles.icon}>
            <CurrencyRupeeIcon />
            {calculateGrandTotal()}
          </div>
        </div>
        <div className={styles.totalFlex}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={agree}
            onChange={(e) => {
              setAgree(e.target.checked);
              if (e.target.checked) setError(false);
            }}
          />
          <div className={styles.totalInput}>
            {` i agree to Terms and Conditions`}
          </div>
        </div>
        {error && (
          <div className={styles.error}>
            {` Please agree to the Terms and Conditions`}
          </div>
        )}

        <button className={styles.orderButton} onClick={handelError}>
          {`Confirm Order`}
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
