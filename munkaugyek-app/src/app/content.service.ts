import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Item } from './types';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  #httpClient = inject(HttpClient);
  #itemUrl = 'localhost:3000/api';
  getAllItems() {}
  getItemById() {}

  addNewItem(item: Item) {
    return this.#httpClient.post<Item>(`${this.#itemUrl}/items`, item);
  }

  deleteItem() {}
  updateItem() {}

  #items = [
    {
      name: 'test1',
      description: 'testtest111',
      image: 'here is an image',
    },
    {
      name: 'test1',
      description: 'testtest111',
      image: 'here is an image',
    },
    {
      name: 'test1',
      description: 'testtest111',
      image: 'here is an image',
    },
    {
      name: 'test1',
      description: 'testtest111',
      image: 'here is an image',
    },
    {
      name: 'test1',
      description: 'testtest111',
      image: 'here is an image',
    },
    {
      name: 'test1',
      description: 'testtest111',
      image: 'here is an image',
    },
    {
      name: 'test1',
      description: 'testtest111',
      image: 'here is an image',
    },
    {
      name: 'test1',
      description: 'testtest111',
      image: 'here is an image',
    },
    {
      name: 'test1',
      description: 'testtest111',
      image: 'here is an image',
    },
  ];

  getItems() {
    return this.#items;
  }
}
