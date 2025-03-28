import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Counter.module.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const Counter = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 0) return;
    setCount(count > 0 ? count - 1 : 0);
  };

  return (
    <div>
      <div className={styles.cardHome} onClick={() => navigate("/")}>
        <ArrowBackOutlinedIcon />
        <div className={styles.backTasks}>Back To Tasks</div>
      </div>
      <div className={styles.container}>
        <div className={styles.countTitle}>1. Counter App</div>
        <div className={styles.countContain}>
          Create a simple counter with increment, decrement, and Reset buttons
          using useState.
        </div>
        <div className={styles.countSection}>
          <div className={styles.count}>{count}</div>
          <div className={styles.countDescription}>Current Count</div>
          <div className={styles.countButton}>
            <RemoveOutlinedIcon
              onClick={decrement}
              className={count === 0 ? styles.countDecrement : ""}
            />
            <ReplayOutlinedIcon onClick={() => setCount(0)} />
            <AddOutlinedIcon onClick={increment} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
