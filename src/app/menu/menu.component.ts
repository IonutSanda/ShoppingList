import { Component, OnInit } from '@angular/core';
import { AddItemService } from './services/add-item.service';
import { Category } from './services/models/item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private addItemService: AddItemService) { }
  
  isAdding = false;
  categories:Category[] = [];
  categoryNameInput!: string;
  categoryTitle!: string;

  ngOnInit(): void {
    this.addItemService.dataSub.subscribe((categories) => {
      this.categories = categories;
    })
    this.addItemService.getCategories();
  }

  onSetIsAdding(){
    this.isAdding = true;
  }

  onCancelAddMode(){
    this.isAdding = false;
    this.categoryNameInput = '';
  }
  
  onAddTitle(){
    this.isAdding = false;
    this.categoryTitle = this.categoryNameInput;
    this.addItemService.addCategory(this.categoryTitle);
    this.categoryNameInput = '';
  }

  onDeleteCategory(data:string){
    this.addItemService.deleteCategory(data);
  }
  
}
