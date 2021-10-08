import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriessListComponent } from './categories-list.component';

describe('TutorialsListComponent', () => {
  let component: CategoriessListComponent;
  let fixture: ComponentFixture<CategoriessListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriessListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
