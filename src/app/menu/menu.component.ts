import { Component, OnInit } from '@angular/core';
import { AddItemService } from './services/add-item.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  categories:string[] = []

  constructor(private addItem: AddItemService) { }

  ngOnInit(): void {
    this.categories = this.addItem.getCategories();
  }

  addCategory(){
    this.addItem.addCategory();
  }

  
}
