import { Link } from "react-router-dom";
import { tasks } from "../../../constant";
import styles from "./Tasks.module.scss";

export interface ITask {
  id: number;
  title: string;
  description: string;
}

const Tasks = () => {
  return (
    <div>
      <div className={styles.cardHeading}>{`React Training Tasks`}</div>
      <div className={styles.container}>
        {tasks.map((res) => {
          return (
            <Link
              key={res.id}
              to={`/task/${res.id}`}
              className={styles.cardLink}
            >
              <div className={styles.cardMain}>
                <div className={styles.cardTitle}>
                  <div className={styles.cardId}>{res.id}</div>
                  <div>{res.title}</div>
                </div>
                <div className={styles.cardContain}>{res.description}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;
