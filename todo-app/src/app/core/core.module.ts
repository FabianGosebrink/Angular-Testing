import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TodoService } from './todo.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [TodoService]
})
export class CoreModule { }
