import { Location } from '@angular/common';
import { async, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HomeComponent,
  RouterComponent,
  routes,
  SearchComponent
} from './routing.component';

describe('Router: App', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [HomeComponent, SearchComponent, RouterComponent]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(RouterComponent);
    router.initialNavigation();
  });

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    fixture.detectChanges();

    router.navigate(['']);
    tick();
    fixture.detectChanges();
    expect(location.path()).toBe('/home');
  }));

  it('navigate to "search" takes you to /search', async(() => {
    fixture.detectChanges();
    router.navigate(['/search']).then(() => {
      expect(location.path()).toBe('/search');
    });
  }));
});
