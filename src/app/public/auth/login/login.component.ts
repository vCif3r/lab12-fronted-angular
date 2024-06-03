import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup; //formulario

  constructor(private router: Router, private _authService: AuthService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin():void{
    if (this.loginForm.valid) {
      const formValues = this.loginForm.value;
      this._authService.login(formValues).subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/intranet/student']);
        },
        err => console.log(err)
      )
    }
  }
}
