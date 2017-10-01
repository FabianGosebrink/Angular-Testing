import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsyncPipeComponent } from './components/async-pipe/async-pipe.component';
import { WithExternalServiceComponent } from './components/with-external-service/with-external-service.component';
import { HighlightDirective } from './directives/highlight.directive';
import { AsyncService } from './services/async-service/async.service';
import { BasicService } from './services/basic-service/basic.service';
import { CustomHttpService } from './services/http-service/http.service';
import { FilterPipe } from './pipes/filterPipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AsyncPipeComponent,
    HighlightDirective,
    WithExternalServiceComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [AsyncService, BasicService, CustomHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
