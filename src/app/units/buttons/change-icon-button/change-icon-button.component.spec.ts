import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeIconButtonComponent } from './change-icon-button.component';

describe('ChangeIconButtonComponent', () => {
  let component: ChangeIconButtonComponent;
  let fixture: ComponentFixture<ChangeIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeIconButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
