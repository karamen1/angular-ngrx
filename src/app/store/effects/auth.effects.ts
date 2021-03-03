import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import * as AuthAction from '../actions/auth.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthAction.login),
      mergeMap((action) =>
        this.authService.login(action.username, action.password).pipe(
          map((user) => AuthAction.loginSuccess({ user: user })),
          tap(() => this.router.navigate(['/pets'])),
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
