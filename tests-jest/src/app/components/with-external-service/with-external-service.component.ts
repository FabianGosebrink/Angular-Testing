import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomHttpService } from '../../services/http-service/http.service';

@Component({
  selector: 'app-with-external-service',
  templateUrl: './with-external-service.component.html',
  styleUrls: ['./with-external-service.component.css'],
})
export class WithExternalServiceComponent implements OnInit {
  result$: Observable<any>;

  constructor(private httpService: CustomHttpService) {}

  ngOnInit() {
    this.result$ = this.httpService.getSingle(1);
  }
}
