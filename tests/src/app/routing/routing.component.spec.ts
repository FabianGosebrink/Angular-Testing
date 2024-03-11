import { Location } from '@angular/common';
import { fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HomeComponent,
  RouterComponent,
  routes,
  SearchComponent,
} from './routing.component';

describe('Router: App', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HomeComponent,
        SearchComponent,
        RouterComponent,
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(RouterComponent);
    router.initialNavigation();
  });

  test('navigate to "" redirects you to /home', fakeAsync(() => {
    fixture.detectChanges();

    router.navigate(['']);
    tick();
    fixture.detectChanges();
    expect(location.path()).toBe('/home');
  }));

  test('navigate to "search" takes you to /search', waitForAsync(() => {
    fixture.detectChanges();
    router.navigate(['/search']).then(() => {
      expect(location.path()).toBe('/search');
    });
  }));
});
