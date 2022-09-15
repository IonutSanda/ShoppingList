import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddItemService {

  constructor() { }

  private categories:string[]= [];

  test = 1;

  addCategory(){
    this.categories.push(`Test${this.test}`);
    this.test++;
  }

  getCategories(){
    return this.categories;
  }

  deleteCategory(){
    this.categories.pop();
    this.test--;
  }
}
