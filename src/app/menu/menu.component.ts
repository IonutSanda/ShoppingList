import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AddItemService } from './services/add-item.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private addItemService: AddItemService) { }
  
  isAdding = false;
  categories:string[] = [];
  categoriesTitle: string = '';

  ngOnInit(): void {
    this.addItemService.categoriesSub.subscribe((categories) => {
      this.categories = categories;
    })
    this.addItemService.getCategories();
  }

  onSetIsAdding(){
    this.isAdding = true;
  }

  onCancelAddMode(){
    this.isAdding = false;
    this.categoriesTitle = '';
  }

  onAddTitle(){
    this.addItemService.addCategory(this.categoriesTitle);
    this.categoriesTitle = '';
    this.isAdding = false;
  }

  onDeleteCategory(data:string){
    this.addItemService.deleteCategory(data);
  }
  
}
