import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TLoginComponent } from './t-login.component';

describe('TLoginComponent', () => {
  let component: TLoginComponent;
  let fixture: ComponentFixture<TLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TLoginComponent]
    });
    fixture = TestBed.createComponent(TLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
