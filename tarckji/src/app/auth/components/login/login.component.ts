import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service'
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { User } from './domain'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  frmGrp : FormGroup
  userD : User
  constructor(
    private logServ : LoginService,
    private fmb : FormBuilder, 
    private route : Router) { }

  ngOnInit(): void {
    this.frmGrp = this.fmb.group({
      userid : this.fmb.control('',Validators.required),
      password : this.fmb.control('', Validators.required)
    })
  }

  login() {
    const userdata = {
      userid : this.frmGrp.value.userid,
      password : this.frmGrp.value.password
    }
    this.logServ.login(userdata).subscribe(res=> {
      let dto = res as User
      this.userD = dto
      this.route.navigate(['dashboard',userdata.userid])
    },
    err=> console.log(err))
  }

}
