import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingclassComponent } from './trainingclass.component';

describe('TrainingclassComponent', () => {
  let component: TrainingclassComponent;
  let fixture: ComponentFixture<TrainingclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
