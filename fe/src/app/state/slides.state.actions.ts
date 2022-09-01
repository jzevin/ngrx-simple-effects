import { Slide } from './../models/slide';
import { createAction, props } from "@ngrx/store";


export const loadSlides = createAction(
  "[Slides] Load All Slides"
);

export const loadSlidesSuccess = createAction(
  "[Slides] Load All Slides Success",
  props<{ slides: ReadonlyArray<Slide> }>()
);

export const loadSlidesFailure = createAction(
  "[Slides] Load All Slides Failure",
  props<Error>()
);