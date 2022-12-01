import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-categories',
  templateUrl: './sidebar-categories.component.html',
  styleUrls: ['./sidebar-categories.component.scss']
})
export class SidebarCategoriesComponent implements OnInit {

  categories = [
    { name: 'Coding', notes: [] },
    {
      name: 'Tasks', notes: [
        {
          id: '1',
          name: 'Task 0'
        },
        {
          id: '2',
          name: 'Task 1'
        },
        {
          id: '3',
          name: 'Task 2'
        },
      ]
    },
    { name: 'School', notes: [] }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
