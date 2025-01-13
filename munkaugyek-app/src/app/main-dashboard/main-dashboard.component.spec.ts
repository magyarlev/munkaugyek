import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { ContentDisplayComponent } from '../content-display/content-display.component';
import { CreateContentComponent } from '../create-content/create-content.component';
import { MainDashboardComponent } from './main-dashboard.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

class MockContentDisplayComponent {}
class MockCreateContentComponent {}
class MockMatButtonModule {}

describe('MainDashboardComponent', () => {
  let component: MainDashboardComponent;
  let fixture: ComponentFixture<MainDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainDashboardComponent, NoopAnimationsModule],
      providers: [
        provideHttpClient(),
        {
          provide: ContentDisplayComponent,
          useClass: MockContentDisplayComponent,
        },
        {
          provide: CreateContentComponent,
          useClass: MockCreateContentComponent,
        },
        {
          provide: MatButtonModule,
          useClass: MockMatButtonModule,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MainDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
