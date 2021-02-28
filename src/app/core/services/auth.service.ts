import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(httpClient: HttpClient) {}

  public login(username: string, password: string): Observable<User> {
    localStorage.setItem(
      'token',
      'adhajsdajsdhj.asdhasjhdjahsjdh.qweuiqriqriyqiry'
    );

    return of({
      id: '1234567',
      email: 'lageru@email.com',
      token: 'adhajsdajsdhj.asdhasjhdjahsjdh.qweuiqriqriyqiry'
    } as User);
  }

  public logout(): Observable<boolean> {
    localStorage.removeItem('token');
    return of(true);
  }
}
