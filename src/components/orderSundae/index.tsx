import { useState } from "react";
import OrderSundaeProvider from "../../context/orderSundae";
import OrderSummary from "./orderSummary";
import ProductListing from "./productListing";
import ThankYouPage from "./thankYouPage";

const OrderSundae = () => {
  const [step, setStep] = useState<number>(1);
  const renderOrderSundae = () => {
    switch (step) {
      case 1:
        return <ProductListing setStep={setStep} />;
      case 2:
        return <OrderSummary setStep={setStep} />;
      case 3:
        return <ThankYouPage setStep={setStep} />;
      default:
        <div>Thank you</div>;
    }
  };

  return (
    <>
      <OrderSundaeProvider>
        <div>{renderOrderSundae()}</div>
      </OrderSundaeProvider>
    </>
  );
};

export default OrderSundae;
