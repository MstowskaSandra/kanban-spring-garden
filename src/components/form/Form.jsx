import { useState, useContext } from "react";
import BoardContext from "../../context/boardContext";
import * as S from "./Form.styles";

function Form() {
  const [taskName, setTaskName] = useState("");
  const [userName, setUserName] = useState("");
  const [selectedLabels, setSelectedLabels] = useState([]);
  const { addTask, labelsList } = useContext(BoardContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.length < 5 || userName.length < 3) {
      alert("Wypełnij formularz.");
      return;
    }
    addTask({
      name: taskName,
      user: userName,
      labels: selectedLabels,
    });

    setTaskName("");
    setUserName("");
    setSelectedLabels([]);
  };

  return (
    <S.FormContainer className="form" onSubmit={handleSubmit}>
      <S.FormLabel>Add new task</S.FormLabel>
      <S.TextArea
        className="input-form textarea"
        name="task"
        placeholder="New task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      ></S.TextArea>

      <S.LabelsSection>
        <S.FormLabel>Labels:</S.FormLabel>
        <S.LabelsList>
          {labelsList?.map((label) => (
            <S.CheckboxLabel key={label.id} color={label.color}>
              <S.CheckboxInput
                type="checkbox"
                checked={selectedLabels.includes(label.name)}
                onChange={(e) => {
                  const labelName = label.name;
                  setSelectedLabels(
                    e.target.checked
                      ? [...selectedLabels, labelName]
                      : selectedLabels.filter((l) => l !== labelName),
                  );
                }}
              />
              {label.name}
            </S.CheckboxLabel>
          ))}
        </S.LabelsList>
      </S.LabelsSection>
      <S.InputField
        className="input-form"
        type="text"
        name="user"
        placeholder="Your username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      ></S.InputField>
      <S.SubmitButton
        className="input-button"
        type="submit"
        value="Add"
      ></S.SubmitButton>
    </S.FormContainer>
  );
}

export default Form;
