import { TestBed, inject } from '@angular/core/testing';

import { PostinfoService } from './postinfo.service';

describe('PostinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostinfoService]
    });
  });

  it('should be created', inject([PostinfoService], (service: PostinfoService) => {
    expect(service).toBeTruthy();
  }));
});
