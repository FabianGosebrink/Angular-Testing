import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsyncPipeComponent } from './components/async-pipe/async-pipe.component';
import { InlineTemplateComponent } from './components/inline-template/inline-template.component';
import { WithExternalServiceComponent } from './components/with-external-service/with-external-service.component';
import { WithInputComponent } from './components/with-input/with-input.component';
import { WithOutputComponent } from './components/with-output/with-output.component';
import { HoverHighlightDirective } from './directives/highlight.directive';
import { FilterPipe } from './pipes/filterPipe/filter.pipe';
import { AsyncService } from './services/async-service/async.service';
import { BasicService } from './services/basic-service/basic.service';
import { CustomHttpService } from './services/http-service/http.service';

@NgModule({
  declarations: [
    AppComponent,
    AsyncPipeComponent,
    HoverHighlightDirective,
    WithExternalServiceComponent,
    FilterPipe,
    InlineTemplateComponent,
    WithInputComponent,
    WithOutputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AsyncService, BasicService, CustomHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
