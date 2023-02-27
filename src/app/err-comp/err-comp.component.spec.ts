import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrCompComponent } from './err-comp.component';

describe('ErrCompComponent', () => {
  let component: ErrCompComponent;
  let fixture: ComponentFixture<ErrCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
