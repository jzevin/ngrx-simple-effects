import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as slideActions from './state/slides.state.actions';
import { selectSlides } from './state/slides.state.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  slides$ = this.store.select(selectSlides);

  constructor(private store: Store) {
    this.store.dispatch(slideActions.loadSlides());
  }
}
