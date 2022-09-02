import { createReducer, on } from '@ngrx/store';

import { UiState } from '../models/ui';
import * as uiStateActions from './ui.state.actions';

const initialUiState: UiState = {
  isLoading: false,
};

export const uiStateReducer = createReducer(
  initialUiState,
  on(uiStateActions.setLoading, (state, {isLoading}) => ({ ...state, isLoading })),
);
