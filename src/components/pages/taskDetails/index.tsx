import { useNavigate, useParams } from "react-router-dom";
import Counter from "../counter";
import Greeting from "../greeting";
import FormHandling from "../formHandling";
import TodoList from "../todoList";
import styles from "./TaskDetails.module.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { tasks } from "../../../constant";
import { useEffect, useState } from "react";
import OrderSundae from "../orderSundae";
import UserTodo from "../userTodo";

const TaskDetails = () => {
  const [currentTask, setCurrentTask] = useState<any>({});
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const fetchTaskDetails = (id: string) => {
    const taskFind = tasks.find((ele) => ele.id === Number(id));
    setCurrentTask(taskFind);
  };

  useEffect(() => {
    if (id) {
      fetchTaskDetails(id);
    }
  });

  const renderComponent = () => {
    switch (Number(params.id)) {
      case 1:
        return <Counter taskDetail={currentTask} />;
      case 2:
        return <Greeting taskDetail={currentTask} />;
      case 3:
        return <FormHandling taskDetail={currentTask} />;
      case 4:
        return <TodoList taskDetail={currentTask} />;
      case 5:
        return <OrderSundae />;
      case 6:
        return <UserTodo />;
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
