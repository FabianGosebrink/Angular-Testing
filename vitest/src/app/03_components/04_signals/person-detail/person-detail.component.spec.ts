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
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('_logId', () => {
    test('should log id', () => {
      // arrange
      const logSpy = vi.spyOn(logger, 'info');
      const newId = 'myNewId';

      // act
      fixture.componentRef.setInput('id', newId);
      fixture.detectChanges();

      // assert
      expect(logSpy).toHaveBeenCalledWith(newId);
    });
  });

  describe('title', () => {
    test('should return title with latest Id', () => {
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
    test('should load new person on id change', async () => {
      // arrange
      const id = '998877665544332211';
      const person: Person = {
        id,
        name: 'Test Person',
      };
      const loadSpy = vi.spyOn(personService, 'load').mockReturnValue(of(person));

      fixture.componentRef.setInput('id', id);

      await fixture.whenStable();

      // act
      const result = component.person();

      // assert
      expect(loadSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(person);
    });
  });
});
