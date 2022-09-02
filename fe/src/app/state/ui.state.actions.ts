import { props, createAction } from '@ngrx/store';


export const setLoading = createAction(
  '[UI] Set Loading',
  props<{ isLoading: boolean }>()
);