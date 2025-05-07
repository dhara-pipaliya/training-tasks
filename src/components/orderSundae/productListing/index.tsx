import AddIcon from "@mui/icons-material/Add";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import { useContext, useState } from "react";
import {
  IOrderSundaeContext,
  OrderSundaeContext,
} from "../../../context/orderSundae";
import styles from "./ProductListing.module.scss";

interface IProps {
  setStep: (step: number) => void;
}

const ProductListing = (props: IProps) => {
  const [error, setError] = useState<string | null>(null);
  const { setStep } = props;
  const {
    scoopData,
    toppingData,
    setScoopData,
    setToppingData,
    calculateTotal,
    calculateGrandTotal,
  } = useContext<IOrderSundaeContext>(OrderSundaeContext);

  const scoopsQuantityHandler = (index: number, type: string) => {
    const scoopClone = [...scoopData];
    if (type === "increment") {
      scoopClone[index].quantity += 1;
      setError(null);
    }
    if (type === "decrement") {
      scoopClone[index].quantity -= 1;
    }
    if (type === "delete") {
      scoopClone[index].quantity = 0;
    }
    setScoopData(scoopClone);
  };

  const toppingQuantityHandler = (index: number, e: any) => {
    const updated = [...toppingData];
    if (e.target.checked) {
      updated[index].quantity = 1;
      setError(null);
    } else {
      updated[index].quantity = 0;
    }
    setToppingData(updated);
  };

  const handleOrderClick = () => {
    const errorScop = scoopData.some((item) => item.quantity > 0);
    const errorTopping = toppingData.some((item) => item.quantity > 0);
    if (errorScop || errorTopping) {
      setError(null);
      setStep(2);
    } else {
      setError(
        !errorScop || !errorTopping
          ? "please choose at least one scoops and toppings"
          : ""
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>{`Design Your Sundae! `}</div>
      <div className={styles.title}>{`Scoops`}</div>
      <div className={styles.totalPrice}>
        <div className={styles.total}>{`Scoops Total:`}</div>
        <div className={styles.icon}>
          <CurrencyRupeeIcon />
          {calculateTotal(scoopData)}
        </div>
      </div>
      <div className={styles.productSection}>
        {scoopData.map((ele, index) => {
          return (
            <div key={index} className={styles.product}>
              <img src={ele.img} className={styles.productImg}></img>
              <div className={styles.productDetails}>
                <div className={styles.ProductName}>{ele.name}</div>
                <div className={styles.productPriceQuantity}>
                  <div className={styles.productPrice}>
                    <CurrencyRupeeIcon />
                    <div className={styles.price}> {ele.price}</div>
                  </div>
                  <div className={styles.productQuantity}>
                    {ele.quantity > 0 && (
                      <>
                        {ele.quantity > 1 ? (
                          <RemoveIcon
                            onClick={() =>
                              scoopsQuantityHandler(index, "decrement")
                            }
                          />
                        ) : (
                          <DeleteIcon
                            onClick={() =>
                              scoopsQuantityHandler(index, "delete")
                            }
                          />
                        )}
                        <div className={styles.pquantity}>{ele.quantity} </div>
                      </>
                    )}
                    <AddIcon
                      onClick={() => scoopsQuantityHandler(index, "increment")}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.heading}>{`Toppings`}</div>
      <div className={styles.title}>{`Toppings`}</div>
      <div className={styles.totalPrice}>
        <div className={styles.total}>{`Toppings Total:`}</div>
        <div className={styles.icon}>
          <CurrencyRupeeIcon />
          {calculateTotal(toppingData)}
        </div>
      </div>
      <div className={styles.productSection}>
        {toppingData.map((val, index) => {
          return (
            <div key={index} className={styles.product}>
              <img src={val.img} className={styles.productImg}></img>
              <div className={styles.productDetails}>
                <div className={styles.productCheckBox}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={val.quantity > 0}
                    onChange={(e) => toppingQuantityHandler(index, e)}
                  ></input>
                  <div className={styles.ProductName}>{val.name}</div>
                </div>
                <div className={styles.productPriceQuantity}>
                  <div className={styles.productPrice}>
                    <CurrencyRupeeIcon />
                    <div className={styles.price}> {val.price}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.orderSummary}>
        <div className={styles.total}>
          {` Grand total: `}
          <CurrencyRupeeIcon /> {calculateGrandTotal()}
        </div>
        {error && <div className={styles.error}>{error}</div>}
        <button className={styles.orderButton} onClick={handleOrderClick}>
          {`  Order Sundae!`}
        </button>
      </div>
    </div>
  );
};

export default ProductListing;
