import { Component, inject } from '@angular/core';
import { ContentService } from '../content.service';
import { Item } from '../types';
import { CardComponent } from '../card/card.component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-content-display',
  standalone: true,
  imports: [CardComponent, AsyncPipe],
  templateUrl: './content-display.component.html',
  styleUrl: './content-display.component.scss',
})
export class ContentDisplayComponent {
  contentService = inject(ContentService);
  items$: Observable<Item[]> = this.contentService.getItems();
}
