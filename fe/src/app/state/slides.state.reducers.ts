import * as slideActions from './slides.state.actions';
import { Slide } from './../models/slide';
import { createReducer, on } from "@ngrx/store";

const initialSlidesState: ReadonlyArray<Slide> = [
  // {
  //   id: 1,
  //   title: 'Slide 1',
  //   url: 'https://picsum.photos/200/300/?random'
  // }
];

export const slidesReducer = createReducer(
  initialSlidesState,
  on(slideActions.loadSlides, (currentState, action) => {
    console.log(action, currentState);  
    return currentState;
  }),
  on(slideActions.loadSlidesSuccess, (currentState, {slides}) => {
    console.log('loadSlidesSuccess', slides);  
    return slides;
  }),
  on(slideActions.loadSlidesFailure, (currentState, err) => {
    console.log('loadSlidesFailure', err);  
    return currentState;
  })
)