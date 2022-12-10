import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleIconButtonComponent } from './toggle-icon-button.component';

describe('ChangeIconButtonComponent', () => {
  let component: ToggleIconButtonComponent;
  let fixture: ComponentFixture<ToggleIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleIconButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
