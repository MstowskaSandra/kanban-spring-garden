import * as S from "./Columns.styles";
import { useContext, useState } from "react";
import BoardContext from "../../context/boardContext";
import Column from "../column/Column";
import LabelFilters from "../labelFilters/LabelFilters";

function Columns() {
  const [activeLabels, setActiveLabels] = useState([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const { columns, tasks, moveTask, setIsModalOpen } = useContext(BoardContext);

  const onDrop = (e, column) => {
    e.preventDefault();
    const taskId = Number(e.dataTransfer.getData("taskId"));
    moveTask(taskId, column.id);
  };

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
      <S.Toolbar>
        <S.Header>
          <img src="/icons/gardener.png" alt="Gardener" />
          <h1>My garden</h1>
        </S.Header>

        <S.BtnsWrapper>
          <S.ToolbarBtn onClick={() => setIsModalOpen(true)}>
            <img src="/icons/add.png" alt="Add new task" />
          </S.ToolbarBtn>
          <S.ToolbarBtn onClick={() => setIsFiltersOpen(true)}>
            <img src="/icons/filter.png" alt="Filtry" />
          </S.ToolbarBtn>
        </S.BtnsWrapper>

        <LabelFilters
          activeLabels={activeLabels}
          setActiveLabels={setActiveLabels}
          isOpen={isFiltersOpen}
          setIsOpen={setIsFiltersOpen}
        />
      </S.Toolbar>

      <S.ScrollArea>
        <S.BoardInner>
          <S.HeaderRow>
            {columns.map((column) => (
              <S.ColumnHeader key={column.id}>
                <S.HeaderWrapper>
                  <S.TxtWrapper>
                    <h4>{column.name}</h4>
                    <span>(Limit: {column.limit})</span>
                  </S.TxtWrapper>
                  <img
                    src={column.icon}
                    alt={column.name}
                    style={{ width: "2.5rem", height: "2.5rem" }}
                  />
                </S.HeaderWrapper>
              </S.ColumnHeader>
            ))}
          </S.HeaderRow>

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
        </S.BoardInner>
      </S.ScrollArea>
    </S.BoardContainer>
  );
}

export default Columns;
