import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativeProfileComponent } from './cooperative-profile.component';

describe('CooperativeProfileComponent', () => {
  let component: CooperativeProfileComponent;
  let fixture: ComponentFixture<CooperativeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperativeProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperativeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
