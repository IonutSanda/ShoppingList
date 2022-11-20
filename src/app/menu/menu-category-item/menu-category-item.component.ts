import { AddItemService } from './../services/add-item.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from '../services/models/item.model';

@Component({
  selector: 'app-menu-category-item',
  templateUrl: './menu-category-item.component.html',
  styleUrls: ['./menu-category-item.component.scss']
})
export class MenuCategoryItemComponent implements OnInit {

  constructor(private addItemService: AddItemService) { }

  @Input() item!: Item;
  @Input() isAddMode: boolean = true;
  @Output() isAddModeChange = new EventEmitter<any>();
  @Output() updateForm = new EventEmitter<any>();
  // itemForm: FormGroup;
  items: any[] = [];


  itemForm = new FormGroup({
    itemName: new FormControl(''),
    price: new FormControl(),
    shop: new FormControl(''),
    amountToBuy: new FormControl()
  })

  ngOnInit(): void {
    this.addItemService.itemsSub.subscribe((items) => {
      this.items = items;
    })
    this.addItemService.getItems();
  }

  onUpdateForm(){
    this.addItemService.addItem(this.itemForm.value)
    this.itemForm.reset();
    this.isAddModeChange.emit(false);
  }

  onDeleteItem(data: any){
    this.addItemService.deleteItemByIndex(data);
  }


}
