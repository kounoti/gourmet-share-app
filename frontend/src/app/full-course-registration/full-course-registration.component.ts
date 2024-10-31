import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-full-course-registration',
  templateUrl: './full-course-registration.component.html',
  styleUrls: ['./full-course-registration.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
})
export class FullCourseRegistrationComponent {
  courseForm: FormGroup;
  courseTypes = [
    '前菜',
    'スープ',
    '魚料理',
    '肉料理',
    'メイン',
    'サラダ',
    'デザート',
    'ドリンク',
  ];

  constructor(private fb: FormBuilder) {
    this.courseForm = this.fb.group({
      type: [''],
      dishName: [''],
      photo: [null],
      restaurantName: [''],
      location: [''],
      comment: [''],
      restaurantLink: [''],
    });
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    this.courseForm.patchValue({ photo: file });
  }

  onSubmit() {
    console.log(this.courseForm.value);
  }
}
