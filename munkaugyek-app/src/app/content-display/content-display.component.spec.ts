import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDisplayComponent } from './content-display.component';
import { provideHttpClient } from '@angular/common/http';
import { CardComponent } from '../card/card.component';
import { ContentService } from '../content.service';
import { delay, of } from 'rxjs';
import { Item } from '../types';

class MockCardComponent {}

describe('ContentDisplayComponent', () => {
  let component: ContentDisplayComponent;
  let fixture: ComponentFixture<ContentDisplayComponent>;
  let mockContentService: jasmine.SpyObj<ContentService>;

  beforeEach(async () => {
    mockContentService = jasmine.createSpyObj<ContentService>(
      'ContentService',
      ['getItems']
    );
    await TestBed.configureTestingModule({
      imports: [ContentDisplayComponent],
      providers: [
        provideHttpClient(),
        {
          provide: ContentService,
          useValue: mockContentService,
        },
        {
          provide: CardComponent,
          useClass: MockCardComponent,
        },
      ],
    }).compileComponents();

    mockContentService.getItems.and.returnValue(
      of([{ name: 'test', description: 'test', image: 'test' }])
    );

    fixture = TestBed.createComponent(ContentDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have one item in the items array', () => {
    let asyncItems: Item[] = [];
    component.items$.subscribe((items) => {
      asyncItems = items;
      expect(asyncItems.length).toBe(1);
    });
  });
  it('should display two card components', () => {
    mockContentService.getItems.and.returnValue(
      of([
        { name: 'test', description: 'test', image: 'test' },
        {
          name: 'test1',
          description: 'test1',
          image: 'test1',
        },
        {
          name: 'test2',
          description: 'test2',
          image: 'test2',
        },
      ]).pipe(delay(2000))
    );

    component.items$ = mockContentService.getItems();
    fixture.detectChanges();

    let asyncItems: Item[] = [];
    component.items$.subscribe((items) => {
      asyncItems = items;
      expect(asyncItems.length).toBe(3);
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelectorAll('app-card').length).toBe(3);
    });
  });
});
