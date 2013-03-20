import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {ApiResponseInterface} from "../../interfaces/apiResponse.interface";
import {ApiService} from "../../services/api.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required
      //Validators.email
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  constructor(private router: Router, private toast: ToastrService, private api: ApiService, private auth: AuthService) {
  }

  ngOnInit() {

    if (this.auth.isUserLoggedIn()) {
      this.router.navigateByUrl('/dashboard');
    }

  }

  submitLogin() {


    if (this.loginForm.valid) {

      let userData = this.loginForm.getRawValue();
          userData['skipXAuth']=true;


      this.api.post('user/login', userData).subscribe((response: ApiResponseInterface) => {

        console.log('API RESPONSE...');
        console.log(response);

        if (response.valid) {

          this.auth.setLoggedIn(JSON.stringify(response.data.user));

          this.router.navigateByUrl('/dashboard');

        } else {

          console.log(response);

          this.toast.error(response.message);

        }
      });

    } else {

      this.toast.error('Please Check For Errors');
    }


  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }


}
