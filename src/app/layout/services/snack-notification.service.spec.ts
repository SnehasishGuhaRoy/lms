import { TestBed } from '@angular/core/testing';

import { SnackNotificationService } from './snack-notification.service';

describe('SnackNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnackNotificationService = TestBed.get(SnackNotificationService);
    expect(service).toBeTruthy();
  });
});
