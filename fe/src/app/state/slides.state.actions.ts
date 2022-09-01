import { Slide } from './../models/slide';
import { createAction } from "@ngrx/store";


export const loadSlides = createAction(
  "[Slides] Load All Slides"
);

export const loadSlidesSuccess = createAction(
  "[Slides] Load All Slides Success"
);

export const loadSlidesFailure = createAction(
  "[Slides] Load All Slides Failure"
);