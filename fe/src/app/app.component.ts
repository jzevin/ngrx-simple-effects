import { ApiService } from './services/api.service';
import { Store } from '@ngrx/store';
import { selectSlides } from './state/slides.state.selectors';
import { Component } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  slides$ = this.store.select(selectSlides);

  constructor(private store: Store, private api: ApiService) {
    // this.api.getAllSlides().pipe(first()).subscribe(console.log);
  }
}
