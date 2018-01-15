import { TestBed, inject } from '@angular/core/testing';

import { ConfirmGuardService } from './confirm-guard.service';

describe('ConfirmGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmGuardService]
    });
  });

  it('should be created', inject([ConfirmGuardService], (service: ConfirmGuardService) => {
    expect(service).toBeTruthy();
  }));
});
