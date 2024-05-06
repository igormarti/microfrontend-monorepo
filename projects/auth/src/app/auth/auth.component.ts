import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth, AuthLibService } from 'auth-lib';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  loginForm!: FormGroup;

  constructor(private _authLibService:AuthLibService,
              private router:Router,
              private formBuilder: FormBuilder
    ){
      this.initForm();
    }

  initForm(){
    this.loginForm = this.formBuilder.group({
      email:['', Validators.required],
      password:['', [Validators.required, Validators.minLength(6)]]
    })
  }  

  singIn(){
    if(this.loginForm.valid){
      const auth:Auth = {
        user: {
          id: 1,
          email: this.loginForm.get('email')?.value,
          name: 'Teste user'
        },
        isActive: true,
        rules: 'ADMIN'
      }

      this._authLibService.setUser(auth);
      this.router.navigate(['/'])
    }
  }
}
