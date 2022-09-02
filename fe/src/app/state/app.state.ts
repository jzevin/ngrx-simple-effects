import { UiState } from './../models/ui';
import { Slide } from '../models/slide';


export type AppState = {
  ui: UiState;
  slides: ReadonlyArray<Slide>
}