import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-category-item',
  templateUrl: './menu-category-item.component.html',
  styleUrls: ['./menu-category-item.component.scss']
})
export class MenuCategoryItemComponent implements OnInit {

  cards = ['card1', 'card1', 'card1', 'card1']

  constructor() { }

  ngOnInit(): void {
  }



}
