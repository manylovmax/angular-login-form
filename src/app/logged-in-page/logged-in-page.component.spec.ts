import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInPageComponent } from './logged-in-page.component';

describe('LoggedInPageComponent', () => {
  let component: LoggedInPageComponent;
  let fixture: ComponentFixture<LoggedInPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggedInPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
