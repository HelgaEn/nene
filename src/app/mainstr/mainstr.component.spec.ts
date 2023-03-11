import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainstrComponent } from './mainstr.component';

describe('MainstrComponent', () => {
  let component: MainstrComponent;
  let fixture: ComponentFixture<MainstrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainstrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainstrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
