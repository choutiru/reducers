import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Effect, Actions, createEffect, ofType } from '@ngrx/effects';
import { GetterService } from '../services/getter.service';

import * as postActions from '../actions/post.actions';
export type Action = postActions.All;

@Injectable()
export class PostEffects {

  loadAuthor$ = createEffect(() => this.actions$.pipe(
    ofType('[Movies Page]')
  ))

  constructor(
    private actions$: Actions,
    private getter: GetterService) {}


}
