import PortalComponent from '../../Portal';
import { StyledContainer, StyledMessage } from './styles';

interface IMessageModal {
  showUpdateModal: boolean;
  children?: React.ReactNode;
}

const UpdateModal = ({ showUpdateModal, children }: IMessageModal) => {
  if (!showUpdateModal) {
    return null;
  }

  return (
    <PortalComponent>
      <StyledContainer>
        <StyledMessage>{children}</StyledMessage>
      </StyledContainer>
    </PortalComponent>
  );
};

export default UpdateModal;
