import * as S from "./Column.styles.js";
import Task from "../task/Task.jsx";
import { useContext } from "react";
import BoardContext from "../../context/boardContext.js";

const Column = ({ column, onDragOver, onDrop, tasksInColumn }) => {
  const { updateTask, removeTask } = useContext(BoardContext);
  return (
    <S.ColumnContainer
      key={column.id}
      onDrop={(e) => onDrop(e, column)}
      onDragOver={onDragOver}
      data-active={false}
    >
      {tasksInColumn.map((task) => (
        <S.TaskWrapper key={task.id}>
          <Task
            id={task.id}
            name={task.name}
            user={task.user}
            updateTask={updateTask}
            labels={task.labels || []}
          />
          {column.id === 5 && (
            <S.DeleteButton
              onClick={() => removeTask(task.id)}
              title="Remove task"
            >
              x
            </S.DeleteButton>
          )}
        </S.TaskWrapper>
      ))}
    </S.ColumnContainer>
  );
};

export default Column;
