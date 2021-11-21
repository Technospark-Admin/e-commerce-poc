import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage = "";
  loginForm:FormGroup = new FormGroup({
    userName: new FormControl('admin',[Validators.required]),
    password: new FormControl('',[Validators.required])
  })
  constructor(private loginService:LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    if(this.route.params.value['out'] == 'out'){
      this.errorMessage = "Logged Out Successfully!!";
    }
  }

  login(){
    this.errorMessage = "";
    console.log("form: ",this.loginForm);
    if(this.loginForm.status == "INVALID"){
      let keys = Object.keys(this.loginForm.controls);
      console.log("keys: ",keys);
      keys.forEach(key => {
       let control = this.loginForm.controls[key]; 
       if(control.status === "INVALID"){
        if(control.errors.required == true){
          this.errorMessage += key+" is required!!!";
        }
       }
      })
    } else {
      let result = this.loginService.authenticate(this.loginForm.value);
      if(result){
        this.router.navigate(['home']);
      } else {
        this.errorMessage = "Incorrect UserName or password!!!"
      }
    }
  }

}
