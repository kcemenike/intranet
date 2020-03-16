import { TestBed } from '@angular/core/testing';


describe('ToastServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToastServiceService = TestBed.get(ToastServiceService);
    expect(service).toBeTruthy();
  });
});
