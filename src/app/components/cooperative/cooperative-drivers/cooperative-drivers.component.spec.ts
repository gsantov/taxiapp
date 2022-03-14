import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativeDriversComponent } from './cooperative-drivers.component';

describe('CooperativeDriversComponent', () => {
  let component: CooperativeDriversComponent;
  let fixture: ComponentFixture<CooperativeDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperativeDriversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperativeDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
