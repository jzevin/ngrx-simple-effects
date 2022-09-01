import * as slidesActions from './slides.state.actions';
import { ApiService } from './../services/api.service';
import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class SlidesEffects {
  
  loadSlidesEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(slidesActions.loadSlides),
      mergeMap(() => {
        return this.api.getAllSlides().pipe(
          map((slides) => slidesActions.loadSlidesSuccess({ slides })),
          catchError((error) => of(slidesActions.loadSlidesFailure(error)))
        );
      })
  )
  })

  constructor(private actions$: Actions, private api: ApiService) {}
}