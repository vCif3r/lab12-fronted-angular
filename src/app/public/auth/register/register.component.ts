import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private router: Router,private _authService: AuthService, private formBuilder: FormBuilder){
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onRegister():void{
    if (this.registerForm.valid) {
      const formValues = this.registerForm.value;
      this._authService.register(formValues).subscribe(
        res => {
          if(res){
            console.log('usuario registrado')
            this.router.navigate(['/login']);
          }
        },
        err => console.log(err)
      )
    }
  }
}
