import { TestBed } from '@angular/core/testing';
import { AppModule } from './app.module';
describe('AppModule', () => {
  let pipe: AppModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AppModule] });
    pipe = TestBed.inject(AppModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
