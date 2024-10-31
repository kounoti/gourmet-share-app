import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCourseRegistrationComponent } from './full-course-registration.component';

describe('FullCourseRegistrationComponent', () => {
  let component: FullCourseRegistrationComponent;
  let fixture: ComponentFixture<FullCourseRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullCourseRegistrationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FullCourseRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
