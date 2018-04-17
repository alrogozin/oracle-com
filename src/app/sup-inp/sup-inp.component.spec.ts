import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupInpComponent } from './sup-inp.component';

describe('SupInpComponent', () => {
  let component: SupInpComponent;
  let fixture: ComponentFixture<SupInpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupInpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupInpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
