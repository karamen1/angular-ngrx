import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import * as AuthAction from '../actions/auth.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, tap, catchError } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthAction.login),
      exhaustMap((action) =>
        this.authService.login(action.username, action.password).pipe(
          map((user) => AuthAction.loginSuccess(user)),
          catchError(() => AuthAction.loginFailure)
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthAction.logout),
      tap(() => this.authService.logout())
    )
  );
}
