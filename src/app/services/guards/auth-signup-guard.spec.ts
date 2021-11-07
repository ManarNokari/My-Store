import { TestBed } from '@angular/core/testing';

import { AuthSignupGuard } from './auth-signup-guard';

describe('AuthSignupGuard', () => {
  let service: AuthSignupGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSignupGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
