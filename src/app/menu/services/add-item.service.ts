import { Category, Item } from './models/item.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddItemService {
  dataSub = new Subject<Category[]>();
  categoriesObs = this.dataSub.asObservable();

  constructor() { }

  data: Category[] =[]

  addCategory(categoriesTitle: string){
    const newCategory = {name: categoriesTitle, items: []}
    this.data.push(newCategory);
    this.dataSub.next(this.data);
  }
  
  getCategories(){
    this.dataSub.next(this.data.slice());
  }

  getCategoryByName(categoryName: string){
    const category = this.data.find(({name}) => name === categoryName);
    console.log('ce avem in category din service?')
    console.log(category);
  }

  deleteCategory(category: string){
    this.data = this.data.filter((obj) => {
      return obj.name !== category;
    })
    // this.da.splice(index, 1);
    this.dataSub.next(this.data);
  }

  addItemToCategory(categoryName: string, items: Item){
    const arrPos = this.data.find(({ name }) => name === categoryName);
    arrPos?.items?.push(items);
    this.dataSub.next(this.data);
  }
  
}
