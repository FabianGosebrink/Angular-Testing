import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('searchValueChanged', () => {
    it('should emit search value after delay', fakeAsync(() => {
      // arrange
      const searchValue = 'my search value';
      let result: string | undefined;

      component.searchValueChanged.subscribe((value) => {
        result = value;
      });

      // act
      component.searchValueControl.setValue(searchValue);
      tick(200);

      // assert
      expect(result).toBeUndefined();
      tick(200);
      expect(result).toBe(searchValue);
    }));
  });
});
