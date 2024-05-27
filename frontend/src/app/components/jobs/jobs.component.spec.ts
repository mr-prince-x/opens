import { ComponentFixture, TestBed } from '@angular/core/testing';

import { jobsComponent } from './jobs.component';

describe('AddchapterComponent', () => {
  let component: jobsComponent;
  let fixture: ComponentFixture<jobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ jobsComponent ]
    })
    .compileComponents();
  });

  
  beforeEach(() => {
    fixture = TestBed.createComponent(jobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
