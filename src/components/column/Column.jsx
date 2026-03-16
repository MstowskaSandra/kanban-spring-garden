import * as S from "./Column.styles.js";
import Task from "../task/Task.jsx";


const Column = ({ column, onDragOver, onDrop, tasksInColumn }) => {
  return (
    <S.ColumnContainer
      onDrop={(e) => onDrop(e, column)}
      onDragOver={onDragOver}
      data-active={false}
    >
      {tasksInColumn.map((task) => (
        <S.TaskWrapper key={task.id}>
          <Task {...task} columnId={column.id} />
        </S.TaskWrapper>
      ))}
    </S.ColumnContainer>
  );
};

export default Column;
