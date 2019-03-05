import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Array<any> = [
    {
      'id': "1",
      'title': "task 1",
      'description': 'description 1'
    },
    {
      'id': "2",
      'title': "task 2",
      'description': 'discription 2'
    },
    {
      'id': "3",
      'title': "task 3",
      'description': 'description 3'
    },
    {
      'id': "4",
      'title': "task 4",
      'description': 'description 4'
    }
  ]

  constructor() { }

  createItem(title, description){
    let randomId = Math.random().toString(36).substr(2, 5);
    this.items.push({
      'id': randomId,
      'title': title,
      'description': description
    });
  }

  getItems(){
    return this.items;
  }

  getItemById(id){
    return this.items.filter(item => item.id === id);
  }

  updateItem(newValues){
    let itemIndex = this.items.findIndex(item => item.id == newValues.id);
    this.items[itemIndex] = newValues;
  }
}
