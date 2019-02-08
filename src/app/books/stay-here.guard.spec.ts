import { TestBed, async, inject } from '@angular/core/testing';

import { StayHereGuard } from './stay-here.guard';

describe('StayHereGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StayHereGuard]
    });
  });

  it('should ...', inject([StayHereGuard], (guard: StayHereGuard) => {
    expect(guard).toBeTruthy();
  }));
});
