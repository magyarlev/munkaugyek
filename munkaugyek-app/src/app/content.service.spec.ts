import { TestBed } from '@angular/core/testing';

import { ContentService } from './content.service';
import { provideHttpClient } from '@angular/common/http';

describe('ContentService', () => {
  let service: ContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
