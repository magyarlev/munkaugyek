import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Item } from './types';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  #httpClient = inject(HttpClient);
  #itemUrl = 'localhost:3000/api';
  getAllItems() {
    return this.#httpClient.get<Item[]>(`${this.#itemUrl}/items`);
  }
  getItemById() {}

  addNewItem(item: Item) {
    return this.#httpClient.post<Item>(`${this.#itemUrl}/items`, item);
  }

  deleteItem() {}
  updateItem() {}
}
