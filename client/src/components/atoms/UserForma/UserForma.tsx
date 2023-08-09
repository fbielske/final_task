import React, { useEffect, useState } from 'react';
import PortalComponent from '../../Portal';
import {
  StyledContainer,
  StyledInputsDiv,
  StyledInvisibleButton,
  StyledUserForm,
} from './styles';
import Input from '../Input/Input';
import Button from '../Button';
import { COLOR } from '../../../shared/theme/types';
import ICONS from '../../../assets/icons';
import { API } from '../../../shared/api';
import { IProduct } from '../../../shared/api/types';
import MessageModal from '../MessageModal';

interface IUserForm {
  showForm: boolean;
  closeForm: () => void;
  refetchUsers: () => void;
}

const UserForma = ({ showForm, closeForm, refetchUsers }: IUserForm) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);

  useEffect(() => {
    if (formSubmitted) {
      setShowMessageModal(true);

      const timer = setTimeout(() => {
        setShowMessageModal(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  const handleFormSubmition = async (event: React.FormEvent) => {
    event.preventDefault();

    const newUser: IProduct = {
      name,
      surname,
      email,
      date,
    };

    try {
      await API.addProduct(newUser);
      setFormSubmitted(true);
      setTimeout(() => {
        refetchUsers();
      }, 2000);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const resetForm = () => {
    setName('');
    setSurname('');
    setEmail('');
    setDate('');
  };

  if (!showForm) {
    return null;
  }

  return (
    <PortalComponent>
      <StyledContainer>
        <StyledUserForm>
          <StyledInputsDiv>
            <StyledInvisibleButton onClick={() => closeForm()}>
              <span>{ICONS.xmark}</span>
            </StyledInvisibleButton>
            <h3>Įveskite vartotojo duomenis</h3>
            <Input
              type='text'
              placeholder='Vardas'
              value={name}
              setValue={setName}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type='text'
              placeholder='Pavardė'
              value={surname}
              setValue={setSurname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <Input
              type='email'
              placeholder='El. Paštas'
              value={email}
              setValue={setEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type='text'
              placeholder='Gimimo data MMMM-mm-dd'
              value={date}
              setValue={setDate}
              onChange={(e) => setDate(e.target.value)}
            />
          </StyledInputsDiv>
          <Button
            text='Pridėti'
            color={COLOR.primary}
            fullwidth={true}
            action={(event: React.FormEvent) => {
              handleFormSubmition(event);
              resetForm();
            }}
          ></Button>
          <MessageModal
            showMessageModal={showMessageModal}
            messageOption='successCreation'
          ></MessageModal>
        </StyledUserForm>
      </StyledContainer>
    </PortalComponent>
  );
};

export default UserForma;
