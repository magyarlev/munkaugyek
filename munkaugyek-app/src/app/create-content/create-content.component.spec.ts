import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContentComponent } from './create-content.component';
import { provideHttpClient } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateContentComponent', () => {
  let component: CreateContentComponent;
  let fixture: ComponentFixture<CreateContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateContentComponent, NoopAnimationsModule],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
