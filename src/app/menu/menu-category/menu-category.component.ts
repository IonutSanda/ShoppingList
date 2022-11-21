import { AddItemService } from './../services/add-item.service';
import { Category } from './../services/models/item.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.scss']
})
export class MenuCategoryComponent implements OnInit {

  constructor(private addItemService: AddItemService) { }

  @Input() category!:string;
  @Output() categoryTitle = new EventEmitter<string>();
  categories: Category[] = [];
  isAddMode = false;
  categoryName!: string;

  
  ngOnInit(): void {
    this.addItemService.dataSub.subscribe((categories) => {
      this.categories = categories;
    })
    this.addItemService.getCategories();
    this.categoryName = this.category;
  }

  onDeleteCategory(){
    this.categoryTitle.emit(this.categoryName);
  }

  onAddItem(){
    console.log(this.categories);
    this.isAddMode = true;
  }
  
  // onUpdateform(){
  //   this.categoryName = this.category.name;
  // }
}
