import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [MatButtonModule, MatExpansionModule],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss',
})
export class CreateContentComponent {
  expansionModuleExpanded = true;
}
