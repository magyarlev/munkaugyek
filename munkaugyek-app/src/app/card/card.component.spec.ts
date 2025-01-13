import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance;
    fixture.componentRef.setInput('item', {
      name: 'testCard',
      description: 'testDescription',
      image: 'testImage',
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render "test" as title', () => {
    expect(compiled.querySelector('mat-card-title')?.textContent).toBe(
      'testCard'
    );
  });

  it('should render "Poster" as subtitle', () => {
    expect(compiled.querySelector('mat-card-subtitle')?.textContent).toBe(
      'Poster'
    );
  });

  it('should render "testImage" in the div with class image', () => {
    expect(compiled.querySelector('div.image')?.textContent).toBe('testImage');
  });

  it('should create', () => {
    expect(compiled.querySelector('p.text')?.textContent).toContain(
      'testDescription'
    );
  });

  it('should render two buttons with text "LIKE" and "SHARE"', () => {
    let buttonsElements = compiled.querySelectorAll('button.text');
    expect(buttonsElements.length).toBe(2);
    expect(buttonsElements.item(0)?.textContent).toBe('LIKE');
    expect(buttonsElements.item(1)?.textContent).toBe('SHARE');
  });
});
