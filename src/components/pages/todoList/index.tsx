import styles from "./TodoList.module.scss";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useState } from "react";

interface ITask {
  id: number;
  name: string;
  isCompleted: boolean;
}

const TodoList = (props: any) => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedTask, setSelectedTask] = useState<ITask | null>(null);
  const { taskDetail } = props;
  const handleSubmit = () => {
    if (selectedTask) {
      setTasks(
        tasks.map((res) =>
          selectedTask?.id === res?.id ? { ...res, name: inputValue } : res
        )
      );
      setSelectedTask(null);
    } else {
      setTasks([
        ...tasks,
        { name: inputValue, id: Math.random(), isCompleted: false },
      ]);
    }
    setInputValue("");
  };

  const handleEdit = (task: ITask) => {
    setSelectedTask(task);
    setInputValue(task.name);
  };

  const handleDelete = (index: number) => {
    const deleteData = [...tasks];
    deleteData.splice(index, 1);
    setTasks(deleteData);
  };

  const handleChange = (Value: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === Value ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.taskHeading}>
        {taskDetail?.id}.{taskDetail?.title}
      </div>
      <div className={styles.taskDescription}>{taskDetail?.description}</div>
      <div>
        <div className={styles.addTask}>{`Add a new task:`}</div>
        <div className={styles.fieldFlex}>
          <input
            placeholder="Enter a new task"
            className={styles.todoInput}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
          <button
            disabled={!inputValue}
            className={`${styles.todoButton} ${
              !inputValue ? styles.buttonDisable : ""
            }`}
            onClick={handleSubmit}
          >
            {selectedTask !== null ? `EDIT` : `ADD`}
          </button>
        </div>
        <div className={styles.countTask}>{`Task (${tasks?.length})`}</div>
        {!tasks.length ? (
          <div className={styles.emptyTodo}>{`No task yet.Add one above!`}</div>
        ) : (
          tasks.map((res, index) => {
            return (
              <div
                className={`${styles.dataDetails} ${
                  selectedTask?.id === res?.id ? styles.inputBorder : ""
                }`}
              >
                <div className={styles.abc}>
                  <input
                    type="checkbox"
                    checked={res.isCompleted}
                    onChange={() => handleChange(res.id)}
                  ></input>
                  <div
                    className={`${styles.showData} ${
                      res.isCompleted ? styles.lineThrough : ""
                    }`}
                  >
                    {res.name}
                  </div>
                </div>
                <div>
                  <DeleteOutlineOutlinedIcon
                    onClick={() => handleDelete(index)}
                    className={styles.todoIcon}
                  />
                  <EditOutlinedIcon
                    className={styles.todoIcon}
                    onClick={() => handleEdit(res)}
                  />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TodoList;
