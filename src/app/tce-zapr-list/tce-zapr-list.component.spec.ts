import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TceZaprListComponent } from './tce-zapr-list.component';

describe('TceZaprListComponent', () => {
  let component: TceZaprListComponent;
  let fixture: ComponentFixture<TceZaprListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TceZaprListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TceZaprListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
