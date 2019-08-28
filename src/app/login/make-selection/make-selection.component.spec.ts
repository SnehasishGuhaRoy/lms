import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeSelectionComponent } from './make-selection.component';

describe('MakeSelectionComponent', () => {
  let component: MakeSelectionComponent;
  let fixture: ComponentFixture<MakeSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
