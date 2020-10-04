import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacePartComponent } from './face-part.component';

describe('FacePartComponent', () => {
  let component: FacePartComponent;
  let fixture: ComponentFixture<FacePartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacePartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
