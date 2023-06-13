import { TestBed } from '@angular/core/testing';

import { ModpacksService } from './modpacks.service';

describe('ModpacksService', () => {
  let service: ModpacksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModpacksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
