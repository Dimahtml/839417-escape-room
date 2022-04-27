import { MainLayout, PageTitle, PageSubtext } from 'components/common/common';
import contactsMap from 'assets/img/contacts-map.jpg';
import * as S from './contacts.styled';

import { YMaps, Map, Placemark } from 'react-yandex-maps';

const Contacts = () => (
  <YMaps>
    <MainLayout>
      <S.Main>
        <S.ContentWrapper>
          <S.PageHeading>
            <PageTitle>Контакты</PageTitle>
            <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
          </S.PageHeading>

          <S.Contacts>
            <S.ContactsList>
              <S.ContactTitle>Адрес</S.ContactTitle>
              <S.ContactValue>
                <S.ContactAddress>
                  Санкт-Петербург,
                  <br />
                  Набережная реки Карповка, д 5
                </S.ContactAddress>
              </S.ContactValue>

              <S.ContactTitle>Режим работы</S.ContactTitle>
              <S.ContactValue>Ежедневно, с 9:00 до 20:00</S.ContactValue>

              <S.ContactTitle>Телефон</S.ContactTitle>
              <S.ContactValue>
                <S.ContactLink href="tel:8 (800) 333-55-99">
                  8 (800) 333-55-99
                </S.ContactLink>
              </S.ContactValue>

              <S.ContactTitle>E-mail</S.ContactTitle>
              <S.ContactValue>
                <S.ContactLink href="mailto:info@escape-room.ru">
                  info@escape-room.ru
                </S.ContactLink>
              </S.ContactValue>
            </S.ContactsList>

            <S.ContactsMap>
              <S.ContactsMapImage
                src={contactsMap}
                alt="мы находимся по адресу Санкт-Петербург, Набережная реки Карповка, д 5"
                width="649"
                height="336"
              />
              <Map
                defaultState={{ center: [59.9683, 30.3173], zoom: 17 }}
                width={649}
                height={336}
              >
                <Placemark geometry={[59.9683, 30.3173]} />
              </Map>
            </S.ContactsMap>
          </S.Contacts>
        </S.ContentWrapper>
      </S.Main>
    </MainLayout>
  </YMaps>
);

export default Contacts;
