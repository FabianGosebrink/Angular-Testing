import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { PersonDetailComponent } from './person-detail.component';
import { MockProviders } from 'ng-mocks';
import { LoggerService } from '../services/logger.service';
import { Person, PersonService } from '../services/person.service';
import { of } from 'rxjs';

describe('PersonDetailComponent', () => {
  let component: PersonDetailComponent;
  let fixture: ComponentFixture<PersonDetailComponent>;
  let logger: LoggerService;
  let personService: PersonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonDetailComponent],
      providers: [MockProviders(LoggerService, PersonService)],
    }).compileComponents();

    logger = TestBed.inject(LoggerService);
    personService = TestBed.inject(PersonService);

    fixture = TestBed.createComponent(PersonDetailComponent);
    fixture.componentRef.setInput('id', 'mySuperId');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('_logId', () => {
    it('should log id', () => {
      // arrange
      const logSpy = jest.spyOn(logger, 'info');
      const newId = 'myNewId';

      // act
      fixture.componentRef.setInput('id', newId);
      fixture.detectChanges();

      // assert
      expect(logSpy).toHaveBeenCalledWith(newId);
    });
  });

  describe('title', () => {
    it('should return title with latest Id', () => {
      // arrange
      const id = '123456789';
      const expected = `Person with ID ${id}`;

      fixture.componentRef.setInput('id', id);

      // act
      const result = component.title();

      // assert
      expect(result).toBe(expected);
    });
  });

  describe('person', () => {
    it('should load new person on id change', fakeAsync(() => {
      // arrange
      const id = '998877665544332211';
      const person: Person = {
        id,
        name: 'Test Person',
      };
      const loadSpy = jest
        .spyOn(personService, 'load')
        .mockReturnValue(of(person));

      fixture.componentRef.setInput('id', id);
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        // act
        const result = component.person();

        // assert
        expect(loadSpy).toHaveBeenCalledWith(id);
        expect(result).toEqual(person);
      });
    }));
  });
});
