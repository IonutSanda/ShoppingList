import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddItemService } from '../services/add-item.service';
import { Item } from '../services/models/item.model';

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.scss']
})
export class MenuCategoryComponent implements OnInit {

  constructor() { }

  @Input() category:string = '';
  @Output() categoryTitle = new EventEmitter<string>();
  isAddMode = false;
  items:any[] = [{}];

  
  ngOnInit(): void {
  }

  onDeleteCategory(){
    this.categoryTitle.emit(this.category);
  }

  onAddItem(){
    this.isAddMode = true;
  }
  
  onUpdateform(data:any){
    // console.log(this.items);
  }

  isAddModeOut(data: boolean){
    this.isAddMode = data;
  }
}
