import { TestBed } from '@angular/core/testing';

import { FlowsServiceService } from './flows-service.service';

describe('FlowsServiceService', () => {
  let service: FlowsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
