import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/model/user';

export enum AuthActionTypes {
  LOGIN = '[LoginComponent] login',
  LOGIN_SUCCESS = '[LoginComponent] login_ok',
  LOGIN_FAILURE = '[LoginComponent] login_failed',
  LOGOUT = '[LoginComponent] logout'
}

export const login = createAction(
  AuthActionTypes.LOGIN,
  props<{ username: string; password: string }>()
);
export const loginSuccess = createAction(
  AuthActionTypes.LOGIN_SUCCESS,
  props<{ user: User }>()
);
export const loginFailure = createAction(AuthActionTypes.LOGIN_FAILURE);
export const logout = createAction(AuthActionTypes.LOGOUT);
