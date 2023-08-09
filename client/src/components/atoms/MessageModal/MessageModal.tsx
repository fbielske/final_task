import { useEffect, useState } from 'react';
import PortalComponent from '../../Portal';
import { StyledContainer, StyledMessage } from './styles';

interface IMessageModal {
  showMessageModal: boolean;
  messageOption?:
    | 'successDeletion'
    | 'successCreation'
    | 'successUpdate'
    | 'confirmation';
  children?: React.ReactNode;
}

const MessageModal = ({
  showMessageModal,
  messageOption,
  children,
}: IMessageModal) => {
  const [messageContent, setMessageContent] = useState('');

  useEffect(() => {
    if (messageOption === 'successDeletion') {
      setMessageContent('Vartotojas sėkmingai ištrintas');
    } else if (messageOption === 'successCreation') {
      setMessageContent('Vartotojas sėkmingai pridėtas.');
    } else if (messageOption === 'successUpdate') {
      setMessageContent('Vartotojas sėkmingai atnaujintas.');
    } else if (messageOption === 'confirmation') {
      setMessageContent('Ar tikrai norite ištrinti šį vartotoją?');
    }
  }, [showMessageModal, messageOption]);

  if (!showMessageModal) {
    return null;
  }

  return (
    <PortalComponent>
      <StyledContainer>
        <StyledMessage>
          <p>{messageContent}</p>
          {children}
        </StyledMessage>
      </StyledContainer>
    </PortalComponent>
  );
};

export default MessageModal;
