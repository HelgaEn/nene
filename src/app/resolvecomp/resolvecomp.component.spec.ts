import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolvecompComponent } from './resolvecomp.component';

describe('ResolvecompComponent', () => {
  let component: ResolvecompComponent;
  let fixture: ComponentFixture<ResolvecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolvecompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolvecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
