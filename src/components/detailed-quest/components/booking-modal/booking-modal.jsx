import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';

import { useState } from 'react';
import { useAppDispatch } from '../../../../hooks';
import { sendOrderAction } from '../../../../store/api-actions';

const BookingModal = ({onCloseBtnClick}) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [isLegal, setIsLegal] = useState(false);

  const handleName = (evt) => {
    setName(evt.target.value);
  };

  const handlePhone = (evt) => {
    setPhone(evt.target.value);
  };

  const handlePeopleCount = (evt) => {
    setPeopleCount(Number(evt.target.value));
  }

  const handleIsLegal = () => {
    setIsLegal(!isLegal);
  }

  const handleCloseBtnClick = () => {
    onCloseBtnClick();
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    await dispatch(sendOrderAction({name, phone, peopleCount, isLegal}));
  };

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={handleCloseBtnClick}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          onSubmit={handleSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              value={name}
              onChange={handleName}
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              value={phone}
              onChange={handlePhone}
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              minLength={10}
              maxLength={10}
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              value={peopleCount}
              onChange={handlePeopleCount}
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              required
            />
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              value={isLegal}
              onChange={handleIsLegal}
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default BookingModal;
