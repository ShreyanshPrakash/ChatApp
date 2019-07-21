import { TestBed, inject } from '@angular/core/testing';

import { ChatAppService } from './chat-app.service';

describe('ChatAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatAppService]
    });
  });

  it('should be created', inject([ChatAppService], (service: ChatAppService) => {
    expect(service).toBeTruthy();
  }));
});
