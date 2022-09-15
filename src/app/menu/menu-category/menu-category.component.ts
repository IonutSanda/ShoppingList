import { Component, OnInit } from '@angular/core';
import { AddItemService } from '../services/add-item.service';

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.scss']
})
export class MenuCategoryComponent implements OnInit {

  constructor(private itemService: AddItemService) { }

  categories:string[]=[];

  ngOnInit(): void {
    this.categories = this.itemService.getCategories();
  }

  deleteCategory(){
    this.itemService.deleteCategory();
  }

}
