import { AppRoute } from 'const';

import { MainLayout, PageTitle } from 'components/common/common';
import * as S from './not-found.styled';

const NotFound = () => (
  <MainLayout>
    <S.Main>
      <S.ContentWrapper>
        <PageTitle>Not Found 404</PageTitle>
        <S.NotFoundLink to={AppRoute.Main}>
          На главную
        </S.NotFoundLink>
      </S.ContentWrapper>
    </S.Main>
  </MainLayout>
);

export default NotFound;
