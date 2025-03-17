import { Component, computed, effect, inject, input } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { PersonService } from '../services/person.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-person-detail',
  imports: [],
  templateUrl: './person-detail.component.html',
  styleUrl: './person-detail.component.scss',
})
export class PersonDetailComponent {
  private readonly logger = inject(LoggerService);
  private readonly personService = inject(PersonService);

  readonly id = input.required<string>();

  readonly personResource = rxResource({
    request: this.id,
    loader: (param) => this.personService.load(param.request),
  });

  readonly person = computed(() => this.personResource.value());

  readonly title = computed(() => `Person with ID ${this.id()}`);

  readonly _logId = effect(() => {
    this.logger.info(this.id());
  });
}
