import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TovarComponent } from './tovar.component';

describe('TovarComponent', () => {
  let component: TovarComponent;
  let fixture: ComponentFixture<TovarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TovarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TovarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
