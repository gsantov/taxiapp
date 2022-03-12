import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativeListComponent } from './cooperative-list.component';

describe('CooperativeListComponent', () => {
  let component: CooperativeListComponent;
  let fixture: ComponentFixture<CooperativeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperativeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperativeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
