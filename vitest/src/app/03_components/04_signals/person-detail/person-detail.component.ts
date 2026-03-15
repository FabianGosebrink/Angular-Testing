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
  readonly #logger = inject(LoggerService);
  readonly #personService = inject(PersonService);

  readonly id = input.required<string>();

  readonly personResource = rxResource({
    params: this.id,
    stream: ({ params }) => this.#personService.load(params),
  });

  readonly person = computed(() => {
    if (!this.personResource.hasValue()) {
      return;
    }

    return this.personResource.value();
  });

  readonly title = computed(() => `Person with ID ${this.id()}`);

  readonly _logId = effect(() => {
    this.#logger.info(this.id());
  });
}
