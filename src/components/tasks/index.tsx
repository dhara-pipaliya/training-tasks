import { tasks } from "../../constant";

export interface ITask {
  id: number;
  title: string;
  description: string;
}

const Tasks = () => {
  return (
    <div className="grid-container container">
      {tasks.map((res) => {
        return (
          <div className="counter-main">
            <div className="card-heading">
              <div className="card-id">{res.id}</div>
              <div>{res.title}</div>
            </div>
            <div className="card-title">{res.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
