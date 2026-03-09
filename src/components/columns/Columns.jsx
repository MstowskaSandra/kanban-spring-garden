import * as S from "./Columns.styles";
import { useContext, useState } from "react";
import BoardContext from "../../context/boardContext";
import Column from "../column/Column";
import LabelFilters from "../labelFilters/LabelFilters";

function Columns() {
  const [activeLabels, setActiveLabels] = useState([]);
  const { columns, tasks, setTasks, labelsList } = useContext(BoardContext);

  const onDrop = (e, column) => {
    e.preventDefault();

    const taskId = Number(e.dataTransfer.getData("taskId"));
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    const tasksInColumn = tasks.filter((t) => t.idColumn === column.id);
    if (tasksInColumn.length >= column.limit) {
      alert(
        `Limit (${column.limit}) dla kolumny "${column.name}" został osiagnięty`,
      );
      return;
    }

    const newTask = { ...task, idColumn: column.id };

    const updatedTasks = tasks.map((t) => (t.id === taskId ? newTask : t));
    setTasks(updatedTasks);
  };

  // const updateTask = (taskId, newName, newLabels) => {
  //   const task = tasks.find((t) => t.id === taskId);
  //   const updatedTasks = tasks.map((t) =>
  //     t.id === taskId
  //       ? { ...t, name: newName, labels: newLabels || task?.labels || [] }
  //       : t,
  //   );
  //   setTasks(updatedTasks);
  // };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const filteredTasks =
    activeLabels.length === 0
      ? tasks
      : tasks.filter((task) =>
          task.labels?.some((label) => activeLabels.includes(label)),
        );

  return (
    <S.BoardContainer>
      <LabelFilters
        labelsList={labelsList}
        activeLabels={activeLabels}
        setActiveLabels={setActiveLabels}
      />
      <S.BoardHeader>
        <S.HeaderRow>
          {columns.map((column) => (
            <S.ColumnHeader key={column.id}>
              <h4>{column.name}</h4>
              <span>(Limit: {column.limit})</span>
            </S.ColumnHeader>
          ))}
        </S.HeaderRow>
      </S.BoardHeader>

      <S.BoardBody>
        <S.ColumnsRow>
          {columns.map((column) => (
            <Column
              key={column.id}
              column={column}
              tasksInColumn={filteredTasks.filter(
                (task) => task.idColumn === column.id,
              )}
              onDrop={onDrop}
              onDragOver={onDragOver}
            />
          ))}
        </S.ColumnsRow>
      </S.BoardBody>
    </S.BoardContainer>
  );
};

export default Columns;
