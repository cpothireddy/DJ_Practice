import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RBuilderLoginComponent } from './r-builder-login.component';

describe('RBuilderLoginComponent', () => {
  let component: RBuilderLoginComponent;
  let fixture: ComponentFixture<RBuilderLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RBuilderLoginComponent]
    });
    fixture = TestBed.createComponent(RBuilderLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
