import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbusComponent } from './arbus.component';

describe('ArbusComponent', () => {
  let component: ArbusComponent;
  let fixture: ComponentFixture<ArbusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
