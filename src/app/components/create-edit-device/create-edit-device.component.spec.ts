import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditDeviceComponent } from './create-edit-device.component';

describe('CreateEditDeviceComponent', () => {
  let component: CreateEditDeviceComponent;
  let fixture: ComponentFixture<CreateEditDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
