import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AddItemService } from './services/add-item.service';
import { Cateogry } from './services/models/item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private addItemService: AddItemService) { }
  
  isAdding = false;
  categories:Cateogry[] = [];
  categoriesTitle!: Cateogry;

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
    this.categoriesTitle.name = '';
  }

  onAddTitle(){
    this.addItemService.addCategory(this.categoriesTitle);
    this.categoriesTitle.name = '';
    this.isAdding = false;
    console.log('test');
  }

  onDeleteCategory(data:string){
    this.addItemService.deleteCategory(data);
  }
  
}
