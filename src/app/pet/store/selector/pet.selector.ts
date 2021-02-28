import { createFeatureSelector, createSelector } from '@ngrx/store';
import { petFeatureKey, PetState } from '../reducers/pet.reducer';

export const getPetState = createFeatureSelector<PetState>(petFeatureKey);

export const petListSelector = createSelector(
  getPetState,
  (state) => state.pets
);
