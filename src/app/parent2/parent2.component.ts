import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.scss'],
})
export class Parent2Component implements OnInit {
  data: any = [
    { id: 1, name: 'test1', salary: '1000', status: true },
    { id: 2, name: 'test2', salary: '2000', status: true },
    { id: 3, name: 'test3', salary: '3000', status: true },
    { id: 4, name: 'test4', salary: '4000', status: true },
  ];
  head: any = [
    {
      field: 'id',
      style: '',
    },
    { field: 'name',
     style: ''
    },
    {
      field: 'salary',
      style: '',
    },
    {
      field: 'status',
      style: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
