import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TceDetailComponent } from './tce-detail.component';

describe('TceDetailComponent', () => {
  let component: TceDetailComponent;
  let fixture: ComponentFixture<TceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
