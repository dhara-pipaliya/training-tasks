import { createContext, useState } from "react";
import { scoops, toppings } from "../../constant";

export interface IOrder {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
}

export interface IOrderSundaeContext {
  scoopData: IOrder[] | [];
  toppingData: IOrder[] | [];
  setScoopData: any;
  setToppingData: any;
  calculateTotal: any;
  calculateGrandTotal: any;
}

const OrderSundaeContext: any = createContext({
  scoopData: [],
  toppingData: [],
});

const OrderSundaeProvider = ({ children }: any) => {
  const [scoopData, setScoopData] = useState<IOrder[]>(scoops);
  const [toppingData, setToppingData] = useState<IOrder[]>(toppings);
  const calculateTotal = (data: any) => {
    let subTotal = data.reduce(
      (total: any, item: any) => total + item.price * item.quantity,
      0
    );
    return subTotal;
  };
  const calculateGrandTotal = () => {
    const abc = scoopData.filter((item) => item.quantity > 0);
    const def = toppingData.filter((item) => item.quantity > 0);
    const scoopSubTotal = calculateTotal(abc);
    const toppingSubTotal = calculateTotal(def);
    return scoopSubTotal + toppingSubTotal;
  };
  const value = {
    scoopData,
    toppingData,
    setScoopData,
    setToppingData,
    calculateTotal,
    calculateGrandTotal,
  };

  return (
    <OrderSundaeContext.Provider value={value}>
      {children}
    </OrderSundaeContext.Provider>
  );
};

export default OrderSundaeProvider;
export { OrderSundaeContext };
