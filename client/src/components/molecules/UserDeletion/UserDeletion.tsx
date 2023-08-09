import { useState } from 'react';
import Button from '../../atoms/Button';
import ICONS from '../../../assets/icons';
import { COLOR } from '../../../shared/theme/types';
import { StyledButtonDiv, StyledModalButtons } from './styles';
import MessageModal from '../../atoms/MessageModal';
import { API } from '../../../shared/api';

interface IUserDeletionProps {
  _id: string;
  refetchUsers: () => void;
}

const UserDeletion: React.FC<IUserDeletionProps> = ({ _id, refetchUsers }) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleDeletion = async () => {
    setShowConfirmationModal(false);

    try {
      await API.deleteProduct(_id);

      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        refetchUsers();
      }, 2000);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <StyledButtonDiv>
      <Button
        icon={ICONS.delete}
        color={COLOR.danger}
        action={() => setShowConfirmationModal(true)}
      />
      {showConfirmationModal && (
        <MessageModal
          showMessageModal={showConfirmationModal}
          messageOption='confirmation'
        >
          <StyledModalButtons>
            <Button text='Taip' action={handleDeletion} />
            <Button
              text='Atšaukti'
              action={() => setShowConfirmationModal(false)}
            />
          </StyledModalButtons>
        </MessageModal>
      )}
      {showSuccessModal && (
        <MessageModal
          showMessageModal={showSuccessModal}
          messageOption='successDeletion'
        />
      )}
    </StyledButtonDiv>
  );
};

export default UserDeletion;
