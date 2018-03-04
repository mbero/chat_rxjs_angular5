import { TestBed, inject } from '@angular/core/testing';

import { CommonsService } from './commons.service';

describe('CommonsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonsService]
    });
  });

  it('should be created', inject([CommonsService], (service: CommonsService) => {
    expect(service).toBeTruthy();
  }));

  it('should confirm that given text is URL', inject([CommonsService], (service: CommonsService) => {
    expect(service.checkIfURL('https://v4-alpha.getbootstrap.com/content/images/')).toBeTruthy;
  }));
});
