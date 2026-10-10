import { ComponentFixture, TestBed } from '@angular/core/testing';

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
    await fixture.whenStable();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('searchValueChanged', () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    test('should emit search value after delay', async () => {
      // arrange
      const searchValue = 'my search value';
      let result: string | undefined;

      component.searchValueChanged.subscribe((value) => {
        result = value;
      });

      // act
      component.searchValueControl.setValue(searchValue);
      await vi.advanceTimersByTimeAsync(200);

      // assert
      expect(result).toBeUndefined();

      await vi.advanceTimersByTimeAsync(200);
      expect(result).toBe(searchValue);
    });
  });
});
