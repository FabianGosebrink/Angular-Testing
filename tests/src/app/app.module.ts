import { BasicService } from './services/basic-Service/basic.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsyncPipeComponent } from './components/async-pipe/async-pipe.component';
import { AsyncService } from './services/async-service/async.service';

@NgModule({
  declarations: [
    AppComponent,
    AsyncPipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AsyncService, BasicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
