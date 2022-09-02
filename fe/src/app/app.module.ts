import { uiStateReducer } from './state/ui.state.reducers';
import { SlidesEffects } from './state/slides.state.effects';
import { slidesReducer } from './state/slides.state.reducers';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({slides: slidesReducer, ui: uiStateReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([SlidesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
