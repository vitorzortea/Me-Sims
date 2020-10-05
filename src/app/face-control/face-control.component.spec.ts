import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceControlComponent } from './face-control.component';

describe('FaceControlComponent', () => {
  let component: FaceControlComponent;
  let fixture: ComponentFixture<FaceControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
