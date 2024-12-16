import { Component } from '@angular/core';
import { ContentDisplayComponent } from '../content-display/content-display.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [ContentDisplayComponent, MatButtonModule],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss',
})
export class MainDashboardComponent {}
