import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { Item } from '../types';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [MatButtonModule, MatExpansionModule, ReactiveFormsModule],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss',
})
export class CreateContentComponent {
  expansionModuleExpanded = true;
  newItem: Item = { name: '', description: '', image: '' };
  contentService = inject(ContentService);

  itemForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  onSend() {
    this.contentService.addNewItem({
      name: this.itemForm.value.name ?? '',
      description: this.itemForm.value.description ?? '',
    });
    this.expansionModuleExpanded = !this.expansionModuleExpanded;
  }
}
