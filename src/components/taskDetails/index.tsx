import { useParams } from "react-router-dom";
import Counter from "../counter";
import Greeting from "../greeting";
import Validation from "../formHandling";
import FormHandling from "../greeting";

const TaskDetails = () => {
  const params = useParams();

  const renderComponent = () => {
    switch (Number(params.id)) {
      case 1:
        return <Counter />;
      case 2:
        return <Greeting />;
      case 3:
        return <Validation />;
      case 4:
        return <FormHandling />;
      default:
        return <div>{params.id}</div>;
    }
  };

  return <>{renderComponent()}</>;
};

export default TaskDetails;
