import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclDataComponent } from './decl-data.component';

describe('DeclDataComponent', () => {
  let component: DeclDataComponent;
  let fixture: ComponentFixture<DeclDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
