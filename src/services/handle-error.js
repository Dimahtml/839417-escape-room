import request from 'axios';
import { store } from '../store';
import { setErrorAction, clearErrorAction } from '../store/api-actions';
import { AppRoute, HttpCode } from '../const';
import { redirectToRoute } from '../store/action';

export const handleError = (error) => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const errorHandle = (message) => {
    store.dispatch(setErrorAction(message));
    store.dispatch(clearErrorAction());
  };

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BadRequest:
      case HttpCode.Unauthorized:
      case HttpCode.NotFound:
        errorHandle(error.message);
        break;
      default:
        return;
    }
  } else {
    store.dispatch(redirectToRoute(AppRoute.ServerError));
  }
};
