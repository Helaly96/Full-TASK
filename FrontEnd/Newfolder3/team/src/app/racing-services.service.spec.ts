import { TestBed, inject } from '@angular/core/testing';

import { RacingServicesService } from './racing-services.service';

describe('RacingServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RacingServicesService]
    });
  });

  it('should be created', inject([RacingServicesService], (service: RacingServicesService) => {
    expect(service).toBeTruthy();
  }));
});
