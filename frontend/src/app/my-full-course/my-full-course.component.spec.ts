import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFullCourseComponent } from './my-full-course.component';

describe('MyFullCourseComponent', () => {
  let component: MyFullCourseComponent;
  let fixture: ComponentFixture<MyFullCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFullCourseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyFullCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
