import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from 'src/app/pet/model/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  constructor(private httpClient: HttpClient) {}

  public loadAllPets(): Observable<Array<Pet>> {
    const bookListURL = 'assets/mock/pets.json';
    return this.getJSON<Array<Pet>>(bookListURL);
  }

  private getJSON<T>(jsonFileUrl: string): Observable<T> {
    return this.httpClient.get<T>(jsonFileUrl);
  }
}
