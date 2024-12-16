import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContentDisplayComponent } from './content-display/content-display.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MainDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'munkaugyek';
}
