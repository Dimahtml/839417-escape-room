import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'components/common/common';
import HistoryRoute from '../history-route/history-route';
import browserHistory from '../../browser-history';

import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import NotFound from 'components/not-found/not-found';
import { appTheme } from './common';
import * as S from './app.styled';

import { AppRoute } from '../../const';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
      <HistoryRoute history={browserHistory}>
        <Routes >
          <Route path={AppRoute.DetailedQuest} element={<DetailedQuest />} />
          <Route path={AppRoute.Contacts} element={<Contacts />} />
          <Route path={AppRoute.NotFound} element={<NotFound />} />
          <Route path={AppRoute.Main} element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HistoryRoute>
  </ThemeProvider>
);

export default App;
