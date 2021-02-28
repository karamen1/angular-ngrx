import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pet } from 'src/app/pet/model/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  constructor() {}

  pets = [
    {
      id: '1',
      color: 'red',
      name: 'DuNv2',
      dateOfBirth: '1234'
    },
    {
      id: '2',
      color: 'green',
      name: 'DuNv2',
      dateOfBirth: '1234'
    }
  ];

  public loadAllPets(): Observable<Array<Pet>> {
    console.log();
    return of(this.pets);
  }
}
