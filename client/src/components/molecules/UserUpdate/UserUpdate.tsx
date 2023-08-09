import { useState } from 'react';
import Button from '../../atoms/Button';
import ICONS from '../../../assets/icons';
import { COLOR } from '../../../shared/theme/types';
import {
  StyledButtonDiv,
  StyledButtonsDiv,
  StyledModalContainer,
} from './styles';
import MessageModal from '../../atoms/MessageModal';
import { API } from '../../../shared/api';
import UpdateModal from '../../atoms/UpdateModal';
import { IProduct } from '../../../shared/api/types';
import Input from '../../atoms/Input';

interface IUserUpdateProps {
  _id: string;
  product: IProduct;
  editable?: boolean;
  refetchUsers: () => void;
}

const UserUpdate: React.FC<IUserUpdateProps> = ({
  _id,
  product,
  refetchUsers,
}) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [tempProduct, setTempProduct] = useState(product);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(`Field: ${name}, Value: ${value}`);
    setTempProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSaveClick = async () => {
    try {
      await API.updateProduct(_id, tempProduct);

      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        refetchUsers();
      }, 2000);
      setShowUpdateModal(false);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <StyledButtonDiv>
      <Button
        icon={ICONS.edit}
        color={COLOR.secondary}
        action={() => {
          setShowUpdateModal(true);
        }}
      />
      {showUpdateModal && (
        <UpdateModal showUpdateModal={showUpdateModal}>
          <StyledModalContainer>
            <form onSubmit={(e) => e.preventDefault()}>
              <Input
                type='text'
                value={tempProduct.name}
                name='name'
                onChange={handleInputChange}
              />
              <Input
                type='text'
                value={tempProduct.surname}
                name='surname'
                onChange={handleInputChange}
              />
              <Input
                type='email'
                value={tempProduct.email}
                name='email'
                onChange={handleInputChange}
              />
              <Input
                type='number'
                value={tempProduct.date}
                name='date'
                onChange={handleInputChange}
              />
            </form>
            <StyledButtonsDiv>
              <Button text='Išsaugoti' action={handleSaveClick} />

              <Button
                text='Atšaukti'
                action={() => {
                  setShowUpdateModal(false);
                }}
              />
            </StyledButtonsDiv>
          </StyledModalContainer>
        </UpdateModal>
      )}
      {showSuccessModal && (
        <MessageModal
          showMessageModal={showSuccessModal}
          messageOption='successUpdate'
        />
      )}
    </StyledButtonDiv>
  );
};

export default UserUpdate;
