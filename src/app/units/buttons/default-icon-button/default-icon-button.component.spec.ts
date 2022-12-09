import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultIconButtonComponent } from './default-icon-button.component';

describe('DefaultIconButtonComponent', () => {
  let component: DefaultIconButtonComponent;
  let fixture: ComponentFixture<DefaultIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultIconButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
