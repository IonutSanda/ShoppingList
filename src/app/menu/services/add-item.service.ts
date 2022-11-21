import { Cateogry, Item } from './models/item.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddItemService {
  categoriesSub = new Subject<Cateogry[]>();
  categoriesObs = this.categoriesSub.asObservable();

  itemsSub = new Subject<any[]>();

  constructor() { }

  // categories:string[]= [];
  // items: any[] = [];

  data: Cateogry[] =[]

  addCategory(categoriesTitle: Cateogry){
    this.data.push(categoriesTitle);
    this.categoriesSub.next(this.data);
    console.log(this.data);
  }
  
  getCategories(){
    // this.categoriesSub.next(this.categories.slice());
  }

  deleteCategory(category: string){
    // const index = this.categories.indexOf(category);
    // this.categories.splice(index, 1);
    // this.categoriesSub.next(this.categories.slice());
  }

  addItem(item: any, categoryId: number){
    // this.data[categoryId].items.push(item);
    // this.itemsSub.next(this.items);
  }
  
  getItems(){
    // this.itemsSub.next(this.items.slice());
  }
  
  deleteItemByIndex(item: string){
    // const index = this.items.indexOf(item)
    // this.items.splice(index, 1);
    // this.itemsSub.next(this.items);
  }
}
