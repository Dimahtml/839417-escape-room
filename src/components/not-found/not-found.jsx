import { MainLayout, PageTitle } from 'components/common/common';
import * as S from './not-found.styled';

const NotFound = () => (
  <MainLayout>
    <S.Main>
      <S.ContentWrapper>
        <S.PageHeading>
          <PageTitle>404</PageTitle>
        </S.PageHeading>
      </S.ContentWrapper>
    </S.Main>
  </MainLayout>
);

export default NotFound;
