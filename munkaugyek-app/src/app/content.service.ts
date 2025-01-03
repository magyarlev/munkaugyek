import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  httpClient = inject(HttpClient);
  getAllItems() {}
  getItemById() {}

  addNewItem() {}

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
