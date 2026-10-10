import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonDetailComponent } from './person-detail.component';
import { LoggerService } from '../services/logger.service';
import { Person, PersonService } from '../services/person.service';
import { of } from 'rxjs';
import { provideMock } from '../../../testing/auto-mock';

describe('PersonDetailComponent', () => {
  let component: PersonDetailComponent;
  let fixture: ComponentFixture<PersonDetailComponent>;
  let logger: LoggerService;
  let personService: PersonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonDetailComponent],
      providers: [provideMock(LoggerService), provideMock(PersonService)],
    }).compileComponents();

    logger = TestBed.inject(LoggerService);
    personService = TestBed.inject(PersonService);

    fixture = TestBed.createComponent(PersonDetailComponent);
    fixture.componentRef.setInput('id', 'mySuperId');
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('_logId', () => {
    test('should log id', async () => {
      // arrange
      const logSpy = vi.spyOn(logger, 'info');
      const newId = 'myNewId';

      // act
      fixture.componentRef.setInput('id', newId);
      await fixture.whenStable();

      // assert
      expect(logSpy).toHaveBeenCalledWith(newId);
    });
  });

  describe('title', () => {
    test('should return title with latest Id', () => {
      // arrange
      const id = '123456789';
      const expected = `Person with ID ${id}`;

      // act
      fixture.componentRef.setInput('id', id);

      // assert
      expect(component.title()).toBe(expected);
    });
  });

  describe('person', () => {
    test('should load new person on id change', async () => {
      // arrange
      const id = '998877665544332211';
      const person: Person = {
        id,
        name: 'Test Person',
      };
      const loadSpy = vi.spyOn(personService, 'load').mockReturnValue(of(person));

      // act
      fixture.componentRef.setInput('id', id);
      await fixture.whenStable();

      // assert
      expect(loadSpy).toHaveBeenCalledWith(id);
      expect(component.person()).toEqual(person);
    });
  });
});
