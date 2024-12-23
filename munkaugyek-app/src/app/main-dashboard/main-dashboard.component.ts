import { Component } from '@angular/core';
import { ContentDisplayComponent } from '../content-display/content-display.component';
import { MatButtonModule } from '@angular/material/button';
import { CreateContentComponent } from '../create-content/create-content.component';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [ContentDisplayComponent, MatButtonModule, CreateContentComponent],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss',
})
export class MainDashboardComponent {}
