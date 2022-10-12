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

  categories:string[] = ['Ciorba'];
  categoriesTitle: string = '';

  setIsAdding(){
    this.isAdding = true;
  }
  
  onAddTitle(){
    this.categories.push(this.categoriesTitle);
    this.isAdding = false;
    console.log(this.categories);
  }
  
}
