import { Slide } from './../models/slide';
import { AppState } from './app.state';
import { createSelector, createFeatureSelector } from "@ngrx/store";

const getSlidesFeature = createFeatureSelector<ReadonlyArray<Slide>>('slides');

export const selectSlides = createSelector(
  getSlidesFeature, // this is needed because When using strict mode, the select method will expect to be passed a selector whose base selects from an object.
  (slides) => slides
)