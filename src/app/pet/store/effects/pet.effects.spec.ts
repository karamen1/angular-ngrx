import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PetEffects } from './pet.effects';

describe('PetEffects', () => {
  let actions$: Observable<any>;
  let effects: PetEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.inject(PetEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
