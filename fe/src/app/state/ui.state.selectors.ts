import { UiState } from './../models/ui';
import { createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store';

const uiSateIsLoadingFeature = createFeatureSelector<UiState>('ui');

export const uiStateIsLoadingSelector = createSelector(
  uiSateIsLoadingFeature,
  ui => ui.isLoading
)