import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecervacionesComponent } from './recervaciones.component';

describe('RecervacionesComponent', () => {
  let component: RecervacionesComponent;
  let fixture: ComponentFixture<RecervacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecervacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecervacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
