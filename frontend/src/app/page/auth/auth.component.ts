import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public signUpMode : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  signup(){
    this.signUpMode = true;
  }
  signIn(){
    this.signUpMode = false;
  }
}
