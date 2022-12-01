import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() category: any;

  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeViewMode() {
    this.isOpen = !this.isOpen;
  }

}
