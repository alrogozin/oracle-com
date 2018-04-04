import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TceListComponent } from './tce-list.component';

describe('TceListComponent', () => {
  let component: TceListComponent;
  let fixture: ComponentFixture<TceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
