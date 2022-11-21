import { Item, Category } from './../services/models/item.model';
import { AddItemService } from './../services/add-item.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-menu-category-item',
  templateUrl: './menu-category-item.component.html',
  styleUrls: ['./menu-category-item.component.scss']
})
export class MenuCategoryItemComponent implements OnInit {

  constructor(private addItemService: AddItemService) { }

  @Input() isAddMode: boolean = true;
  @Output() isAddModeChange = new EventEmitter<any>();
  data: Category[] = [];
  category!: Category;
  @Input() categoryName!: string;
  categoryItems!: Item[];


  itemForm = new FormGroup({
    itemName: new FormControl(''),
    price: new FormControl(),
    shop: new FormControl(''),
    amountToBuy: new FormControl()
  })

  ngOnInit(): void {
    this.addItemService.dataSub.subscribe((data) => {
      this.data = data;
    })
    this.addItemService.getCategories();
  }
  
  onUpdateForm(){
    this.addItemService.addItemToCategory(this.categoryName, <Item>this.itemForm.value);
    this.addItemService.getCategoryByName(this.categoryName);
    // this.addItemService.getCategoryById(this.categoryName);
    this.onCancelForm();
  }
  onCancelForm(){
    this.itemForm.reset();
    this.isAddModeChange.emit(false);
  }

  onTest(){
  }

}
