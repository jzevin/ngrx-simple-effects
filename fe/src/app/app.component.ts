import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as slideActions from './state/slides.state.actions';
import { selectSlides } from './state/slides.state.selectors';
import { uiStateIsLoadingSelector } from './state/ui.state.selectors';
import * as uiStateActions from "./state/ui.state.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  slides$ = this.store.select(selectSlides);
  loading$ = this.store.select(uiStateIsLoadingSelector);

  constructor(private store: Store) {
    this.store.dispatch(slideActions.loadSlides()); 
    this.store.dispatch(uiStateActions.setLoading({isLoading:true})); // contrived example of loading state
  }
}
