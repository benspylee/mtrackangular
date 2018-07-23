import { TestBed, inject } from '@angular/core/testing';

import { QuoteinfoService } from "./quoteinfo.service";

describe('QuoteinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuoteinfoService]
    });
  });

  it('should be created', inject([QuoteinfoService], (service: QuoteinfoService) => {
    expect(service).toBeTruthy();
  }));
});
