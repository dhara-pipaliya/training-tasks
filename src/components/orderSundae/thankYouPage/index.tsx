import { useContext } from "react";
import {
  IOrder,
  IOrderSundaeContext,
  OrderSundaeContext,
} from "../../../context/orderSundae";
import styles from "./thankYouPage.module.scss";

interface IProps {
  setStep: (step: number) => void;
}

const ThankYouPage = (props: IProps) => {
  const { setStep } = props;
  const { scoopData, toppingData, setScoopData, setToppingData } =
    useContext<IOrderSundaeContext>(OrderSundaeContext);

  const handleOrder = () => {
    const resetScoop = scoopData.map((item) => ({
      ...item,
      quantity: 0,
    })) as IOrder[];
    const resetTopping = toppingData.map((item) => ({
      ...item,
      selected: false,
    })) as IOrder[];
    setScoopData(resetScoop);
    setToppingData(resetTopping);
    setStep(1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.thankYouSection}>
        <div className={styles.title}>{`Thank You`}</div>
        <div className={styles.heading}>{`Your order number is 10 `}</div>
        <div className={styles.contain}>
          {`as per our terms and conditions, nothing will happen now`}
        </div>
        <div className={styles.buttonSection}>
          <button className={styles.orderButton} onClick={handleOrder}>
            {`Create New Order`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
