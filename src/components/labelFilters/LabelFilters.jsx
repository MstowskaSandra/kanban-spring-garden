import { useContext } from 'react';
import * as S from './LabelFilters.styles';
import BoardContext from '../../context/boardContext';

const LabelFilters = ({ activeLabels, setActiveLabels }) => {
    const { labelsList } = useContext(BoardContext);
    
    return (
        <S.LabelFilters>
        {labelsList.map((label) => (
          <S.LabelChip
            key={label.id}
            color={label.color}
            active={activeLabels.includes(label.name)}
            onClick={() => {
              setActiveLabels((prev) =>
                prev.includes(label.name)
                  ? prev.filter((l) => l !== label.name)
                  : [...prev, label.name],
              );
            }}
          >
            {label.name.slice(0, 3)}
          </S.LabelChip>
        ))}
        {activeLabels.length > 0 && (
          <S.ClearButton onClick={() => setActiveLabels([])}>
            Clear ({activeLabels.length})
          </S.ClearButton>
        )}
      </S.LabelFilters>
    );
};

export default LabelFilters;