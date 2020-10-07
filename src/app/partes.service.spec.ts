import { TestBed } from '@angular/core/testing';

import { PartesService } from './partes.service';

describe('PartesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartesService = TestBed.get(PartesService);
    expect(service).toBeTruthy();
  });
});
