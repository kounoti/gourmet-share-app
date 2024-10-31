import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class SignupComponent {
  signupForm: FormGroup;
  loading = false;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(255)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      this.loading = true;
      const { name, email, password } = this.signupForm.value;

      this.http
        .post<{ token: string }>('http://localhost:8000/api/register', {
          name,
          email,
          password,
        })
        .subscribe({
          next: (response) => {
            localStorage.setItem('token', response.token);
            this.loading = false;
            this.router.navigate(['/dashboard']);
          },
          error: (error) => {
            this.loading = false;
            this.errorMessage =
              'サインアップに失敗しました。再度お試しください。';
          },
        });
    }
  }
}
