import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  data: any = [
    { id: 1, name: 'John', age: 18 },
    { id: 2, name: 'Nathan', age: 20 },
    { id: 3, name: 'Doe', age: 22 },
    { id: 4, name: 'Tim', age: 24 },
    { id: 5, name: 'Peter', age: 21 },
    { id: 6, name: 'Max', age: 19 },
  ];
  head: any = [
    {
      field: 'id',
      style: '',
    },
    {
      field: 'name',
      style: '',
    },
    {
      field: 'age',
      style: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {

  }
}
