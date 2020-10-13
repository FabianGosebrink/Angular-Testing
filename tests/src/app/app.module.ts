import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WithOutputNestedComponent } from './components/with-output-nested/with-output-nested.component';

@NgModule({
  declarations: [AppComponent, WithOutputNestedComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
