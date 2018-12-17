import { TestBed, inject } from '@angular/core/testing';

import { TrainingClassService } from './trainingclass.service';

describe('ClassService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainingClassService]
    });
  });

  it('should be created', inject([TrainingClassService], (service: TrainingClassService) => {
    expect(service).toBeTruthy();
  }));
});
