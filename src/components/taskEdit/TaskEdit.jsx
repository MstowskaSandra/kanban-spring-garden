import BoardContext from "../../context/boardContext";
import * as S from "./TaskEdit.styles";
import { useContext } from "react";

const TaskEdit = ({
  editName,
  editLabels,
  onChangeName,
  onChangeLabels,
  onSave,
  onCancel,
}) => {
  const { labelsList } = useContext(BoardContext);
  return (
    <>
      <S.EditInput
        value={editName}
        onChange={(e) => onChangeName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSave();
          if (e.key === "Escape") onCancel();
        }}
        autoFocus
      />

      <S.LabelsEdit>
        {labelsList.map((label) => (
          <S.CheckboxLabel key={label.id}>
            <input
              type="checkbox"
              checked={editLabels.includes(label.name)}
              onChange={(e) => {
                const labelName = label.name;

                onChangeLabels((prev) =>
                  e.target.checked
                    ? [...prev, labelName]
                    : prev.filter((l) => l !== labelName),
                );
              }}
            />
            {label.name}
          </S.CheckboxLabel>
        ))}
      </S.LabelsEdit>
      <S.EditButton onClick={onSave}>ok</S.EditButton>
    </>
  );
};

export default TaskEdit;
