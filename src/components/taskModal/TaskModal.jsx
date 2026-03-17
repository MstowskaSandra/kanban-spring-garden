import * as S from './TaskModal.styles';

const TaskModal = ({ children, onClose }) => (
  <S.Overlay onClick={onClose}>
    <S.Modal onClick={(e) => e.stopPropagation()}>
      <S.CloseButton onClick={onClose}>X</S.CloseButton>
      {children}
    </S.Modal>
  </S.Overlay>
);

export default TaskModal;