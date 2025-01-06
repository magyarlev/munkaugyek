import { Component, inject, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { Item } from '../types';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContentService } from '../content.service';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [
    MatButtonModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss',
})
export class CreateContentComponent {
  accordion = viewChild.required(MatAccordion);

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
    this.accordion().closeAll();
  }
}
