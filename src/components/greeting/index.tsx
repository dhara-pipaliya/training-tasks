import { useState } from "react";
import styles from "./Greeting.module.scss";

interface IGreetingResult {
  name?: string | null;
}

const GreetingResult = ({ name = "guest" }: IGreetingResult) => {
  return (
    <div className={styles.greetingSection}>
      <div className={styles.greetingHead}>
        {`Hello,`}
        {name}
      </div>
      <div className={styles.greetingDescription}>
        {` Welcome to our application`}
      </div>
    </div>
  );
};

const Greeting = () => {
  const [name, setName] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");

  const onUpdate = () => {
    setName(inputValue);
    setInputValue("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.taskTitle}>{`2. Greeting Component`}</div>
      <div className={styles.taskDescription}>
        {`  Create a Greeting component that takes a name as a prop and displays a
          personalized message.`}
      </div>
      <GreetingResult name={name || undefined} />
      <div className={styles.inputHeading}>{`Enter a name:`}</div>
      <div className={styles.inputSection}>
        <input
          type="text"
          placeholder="Enter Your name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={styles.greetingInput}
        ></input>
        <button
          className={`${styles.greetingButton} ${
            !inputValue ? styles.buttonDisable : ""
          }`}
          onClick={onUpdate}
        >
          {`update`}
        </button>
      </div>
    </div>
  );
};

export default Greeting;
