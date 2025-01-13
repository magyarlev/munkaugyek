import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDisplayComponent } from './content-display.component';
import { provideHttpClient } from '@angular/common/http';

describe('ContentDisplayComponent', () => {
  let component: ContentDisplayComponent;
  let fixture: ComponentFixture<ContentDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentDisplayComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
