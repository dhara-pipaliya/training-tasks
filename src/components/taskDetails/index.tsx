import { useNavigate, useParams } from "react-router-dom";
import Counter from "../counter";
import Greeting from "../greeting";
import FormHandling from "../formHandling";
import TodoList from "../todoList";
import styles from "./TaskDetails.module.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const TaskDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const renderComponent = () => {
    switch (Number(params.id)) {
      case 1:
        return <Counter />;
      case 2:
        return <Greeting />;
      case 3:
        return <FormHandling />;
      case 4:
        return <TodoList />;
      default:
        return <div>{params.id}</div>;
    }
  };

  return (
    <div>
      <div className={styles.cardHome} onClick={() => navigate("/")}>
        <ArrowBackOutlinedIcon />
        <div className={styles.backTasks}>{`Back To Tasks`}</div>
      </div>
      {renderComponent()}
    </div>
  );
};

export default TaskDetails;
