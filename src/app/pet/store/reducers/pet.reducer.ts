import { Action, createReducer, on } from '@ngrx/store';
import * as PetAction from '../actions';
import { Pet } from '../../model/pet';

export const petFeatureKey = 'pet';

export interface PetState {
  pets: Pet[];
}

export const initialState: PetState = {
  pets: []
};

const petReducer = createReducer(
  initialState,
  on(PetAction.loadPetsSuccess, (state, payload) => ({
    ...state,
    pets: payload.pets
  })),
  on(PetAction.loadPetsFailure, (state) => ({ pets: [] }))
);

export function reducer(state: PetState, action: Action) {
  return petReducer(state, action);
}
