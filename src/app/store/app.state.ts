import { ActionReducerMap } from '@ngrx/store';
import { User } from '../core/model/user';
import * as sessionInfoReducer from './reducers/auth.reducer';

export interface GuiInfoState {
  backgroudColor: string;
}

export interface SessionInfoState {
  isAuthenticated: boolean;
  user: User | null;
}

export interface AppState {
  sessionInfo: SessionInfoState;
  uiInfo?: GuiInfoState;
}

export const appStateReducer: ActionReducerMap<AppState> = {
  sessionInfo: sessionInfoReducer.sessionState
};
