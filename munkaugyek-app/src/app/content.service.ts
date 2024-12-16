import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
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
