import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'search-component',
  template: '',
})
export class SearchComponent {}

@Component({
  selector: 'home-component',
  template: '',
})
export class HomeComponent {}

@Component({
  template: `<router-outlet></router-outlet>`,
})
export class RouterComponent {}

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
];
