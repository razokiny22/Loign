import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/core/service/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public RegisterForm! : FormGroup;
  constructor(private fb : FormBuilder,private auth:AuthentificationService,private router :Router) { }


  ngOnInit(): void {
    this.RegisterForm = this.fb.group({
        username : ["",Validators.required],
        email : ["",Validators.required],
        role : [""],
        password : ["",Validators.required]
    })
    
  }
  
  connexion(){
    console.log(this.RegisterForm.value)
    this.auth.sendData('/register',JSON.stringify(this.RegisterForm.value)).subscribe(data =>{
      console.log(data)
      if(data.success){
        this.router.navigateByUrl('')
      }
    })
    

  }
  
}