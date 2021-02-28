import { Injectable } from '@angular/core';
import * as PetAction from '../actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PetService } from 'src/app/core/services/pet.service';
import { catchError, map, exhaustMap } from 'rxjs/operators';

@Injectable()
export class PetEffects {
  constructor(private actions$: Actions, private petService: PetService) {}

  loadAllPet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PetAction.loadPets),
      exhaustMap(() =>
        this.petService.loadAllPets().pipe(
          map((pets) => PetAction.loadPetsSuccess(pets)),
          catchError(() => PetAction.loadPetsFailure)
        )
      )
    )
  );
}
