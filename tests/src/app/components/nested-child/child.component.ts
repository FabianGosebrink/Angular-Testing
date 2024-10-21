import { Component, inject, OnInit } from '@angular/core';
import { HttpService } from '../../services/http-base-service/http.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent implements OnInit {
  private readonly httpService = inject(HttpService);

  ngOnInit(): void {
    this.httpService
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((res) => {
        console.log('Todo:', res);
      });
  }
}
