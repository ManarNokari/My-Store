import { TestBed } from '@angular/core/testing';

import { AuthLoginGuard } from './auth-login-guard';

describe('AuthLoginGuard', () => {
  let service: AuthLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthLoginGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
