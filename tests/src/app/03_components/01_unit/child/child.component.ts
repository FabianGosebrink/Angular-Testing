import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent implements OnInit {
  ngOnInit(): void {
    console.log('Hello from child');
  }
}
