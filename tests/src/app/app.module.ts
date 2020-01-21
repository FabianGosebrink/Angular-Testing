import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WithOutputNestedComponent } from './components/with-output-nested/with-output-nested.component';
import { PlainHtmlEventsComponent } from './components/plain-html-events/plain-html-events.component';

@NgModule({
  declarations: [AppComponent, WithOutputNestedComponent, PlainHtmlEventsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
