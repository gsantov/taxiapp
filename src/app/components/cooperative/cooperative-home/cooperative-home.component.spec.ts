import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativeHomeComponent } from './cooperative-home.component';

describe('CooperativeHomeComponent', () => {
  let component: CooperativeHomeComponent;
  let fixture: ComponentFixture<CooperativeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperativeHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperativeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
