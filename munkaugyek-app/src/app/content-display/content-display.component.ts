import { Component, inject } from '@angular/core';
import { ContentService } from '../content.service';
import { Item } from '../types';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-content-display',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './content-display.component.html',
  styleUrl: './content-display.component.scss',
})
export class ContentDisplayComponent {
  contentService = inject(ContentService);
  items: Item[] = [];

  constructor() {
    this.items = this.contentService.getItems();
  }
}
