import { Component, OnInit } from '@angular/core';
import { AddItemService } from './services/add-item.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }
  isAdding = false;

  ngOnInit(): void {
  }

  categories:string[] = [];
  categoriesTitle: string = '';

  setIsAdding(){
    this.isAdding = true;
  }
  
  onAddTitle(){
    this.categories.push(this.categoriesTitle);
    this.isAdding = false;
    console.log(this.categories);
  }

  onDeleteCategory(data:string){
    const index = this.categories.indexOf(data);
    if(index !== -1){
      this.categories.splice(index,1);
    }
  }
  
}
