import { createReducer, on, Action } from '@ngrx/store';
import * as AuthAction from '../actions/auth.action';
import { SessionInfoState } from '../app.state';

// Initial state
export const initialState: SessionInfoState = {
  isAuthenticated: false,
  user: null
};

const authReducer = createReducer(
  initialState,
  // Login success
  on(AuthAction.loginSuccess, (state, payload) => ({
    isAuthenticated: true,
    user: payload.user
  })),

  // Login Failure
  on(AuthAction.loginFailure, (state) => ({
    ...state,
    isAuthenticated: false,
    user: null
  })),

  // logout
  on(AuthAction.logout, (state) => ({
    isAuthenticated: false,
    user: null
  }))
);

export function sessionState(
  state: SessionInfoState = initialState,
  action: Action
): SessionInfoState {
  return authReducer(state, action);
}
