/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('passwordInput', { read: ElementRef }) passwordInput: ElementRef;
  showPassword: boolean = true;
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, public loadingController: LoadingController,
     private router: Router, public toastController: ToastController) {
    this.loginForm = this.fb.group({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  onShowHidePassword(): void {
    this.showPassword = !this.showPassword;
    if(!this.showPassword) {
      this.passwordInput.nativeElement['type'] = 'text';
    } else {
      this.passwordInput.nativeElement['type']  = 'password';
    }
  }

  onLogin(): void {
    const loading = this.loadingController.create({
      message: 'Loggin in...'
    });

    loading.then(loader => loader.present());

    if(this.loginForm.get('userName').value === 'admin' &&
    this.loginForm.get('password').value === 'admin123') {
      setTimeout(() => {
        loading.then(loader => loader.dismiss());
        this.router.navigate(['/home']);
      }, 3000);
    } else {
      loading.then(loader => loader.dismiss());

      const toast = this.toastController.create({
        message: 'User name or Password incorrect.',
        color: 'danger',
        duration: 3000
      });

      toast.then(toastr => toastr.present());
    }
  }
}
