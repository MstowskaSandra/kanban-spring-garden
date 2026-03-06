import { useState } from "react";
import * as S from "./Task.styles";

function Task({ id, name, user, updateTask, labels, labelsList }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(name);

  const onDragStart = (e) => {
    e.dataTransfer.setData("taskId", id);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setEditName(name);
  };

  const handleSave = () => {
    if (editName.trim() && editName !== name) {
      updateTask(id, editName.trim());
    }
    setIsEditing(false);
  };

  return (
    <S.TaskContainer draggable="true" onDragStart={onDragStart}>
      {isEditing ? (
        <>
          <S.EditIcon
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            onBlur={handleSave}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
              if (e.key === "Escape") {
                setEditName(name);
                setIsEditing(false);
              }
            }}
            autoFocus
          />
          <S.EditButton onClick={handleSave}>ok</S.EditButton>
        </>
      ) : (
        <S.TaskContent>
          {labels &&
            labels.map((labelName, index) => {
              const labelObj = labelsList.find((l) => l.name === labelName);
              return (
                <S.LabelChip
                  key={`${id}-${labelName}-${index}`}
                  title={labelName}
                  color={labelObj?.color}
                >
                  {labelName}
                </S.LabelChip>
              );
            })}
          <S.TaskName>{name}</S.TaskName>
          <S.TaskUser>{user}</S.TaskUser>

          <S.EditIcon onClick={handleEditClick} title="Edit">
            ✏️
          </S.EditIcon>
        </S.TaskContent>
      )}
    </S.TaskContainer>
  );
}

export default Task;
