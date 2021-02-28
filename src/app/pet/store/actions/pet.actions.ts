import { createAction, props } from '@ngrx/store';
import { Pet } from '../../model/pet';

enum PetActionTypes {
  LOAD_PETS = '[PetList] Load pets',
  LOAD_PETS_SUCCESS = '[PetList] Load pets success',
  LOAD_PETS_FAILURE = '[PetList] Load pets error',
  UPDATE_PET = '[Pet] update a pet',
  CREATE_PET = '[Pet] register a pet'
}

export const loadPets = createAction(PetActionTypes.LOAD_PETS);
export const loadPetsSuccess = createAction(
  PetActionTypes.LOAD_PETS_SUCCESS,
  props<{ pets: Pet[] }>()
);
export const loadPetsFailure = createAction(PetActionTypes.LOAD_PETS_FAILURE);
export const createPet = createAction(PetActionTypes.CREATE_PET, props<Pet>());
export const updatePet = createAction(PetActionTypes.UPDATE_PET, props<Pet>());
