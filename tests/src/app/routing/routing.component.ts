import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  imports: [RouterModule],
})
export class RouterComponent {}

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
];
