import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'search-component',
  template: '',
  standalone: true,
})
export class SearchComponent {}

@Component({
  selector: 'home-component',
  template: '',
  standalone: true,
})
export class HomeComponent {}

@Component({
  selector: 'router-component',
  template: `<router-outlet></router-outlet>`,
  standalone: true,
  imports: [RouterTestingModule],
})
export class RouterComponent {}

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
];
