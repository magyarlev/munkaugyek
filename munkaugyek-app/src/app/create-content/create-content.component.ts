import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss',
})
export class CreateContentComponent {}
