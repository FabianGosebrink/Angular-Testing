import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AsyncPipeComponent } from './components/async-pipe/async-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncPipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
