import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from 'components/app/app';
import { fetchQuestsAction } from './store/api-actions';
import ErrorMessage from 'components/error-message/error-message';

store.dispatch(fetchQuestsAction());

render(
  <Provider store = {store}>
    <StrictMode>
      <ErrorMessage />
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById('root'),
);
