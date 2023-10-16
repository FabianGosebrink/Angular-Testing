import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CustomHttpService } from '../../services/http-service/http.service';

@Component({
  selector: 'app-with-external-service',
  templateUrl: './with-external-service.component.html',
  styleUrls: ['./with-external-service.component.css'],
  standalone: true,
  imports: [NgIf, AsyncPipe],
})
export class WithExternalServiceComponent {
  private readonly httpService = inject(CustomHttpService);

  result$ = this.httpService.getSingle<any>(1);
}
