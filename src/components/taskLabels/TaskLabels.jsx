import * as S from './TaskLabels.styles';
import { useContext } from "react";
import BoardContext from "../../context/boardContext";

const TaskLabels = ({ labels }) => {
  const { labelsList } = useContext(BoardContext);

  return (
    <>
      {labels &&
        labels.map((labelName, index) => {
          const labelObj = labelsList.find((l) => l.name === labelName);

          return (
            <S.LabelChip
              key={`${labelName}-${index}`}
              title={labelName}
              color={labelObj?.color}
            >
              {labelObj?.icon ? (
                <img src={labelObj.icon} alt={labelObj?.name || labelName} />
              ) : null}
              {labelObj?.icon ? "" : labelName}
            </S.LabelChip>
          );
        })}
    </>
  );
};

export default TaskLabels;