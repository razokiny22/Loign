import { AuthentificationService } from './../../../core/service/authentification.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public LoginForm! : FormGroup;
  private token! : any
  constructor(
    private fb:FormBuilder,
    private auth:AuthentificationService,
    private router : Router,
  
  ) { }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
        username : ["",Validators.required],
        password : ["",Validators.required]
    })
    
  }
  
  connexion(){
    this.auth.sendData('/login',JSON.stringify(this.LoginForm.value)).subscribe(data => {
      if(data.success){
        localStorage.setItem('token',data.token)
        this.router.navigateByUrl('/page')
      }
            
    })

  }
  
}
