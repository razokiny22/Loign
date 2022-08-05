import { db } from './../core/models/db';
import { IUser } from './../core/models/User.model';
import { AuthentificationService } from 'src/app/core/service/authentification.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit { 
 
  private token! : String
  public data!: IUser[]
  public username!: string
  constructor(private auth:AuthentificationService) { }

  ngOnInit(): void {
    this.ngAfterViewInit()
    
  }
  ngAfterViewInit() {
    this.token = localStorage.getItem('token') as String
    this.auth.sendData('/page',this.token).subscribe(data =>{
      this.data = data.data
      this.username = data.user
      console.log(this.data)
    })
   
  }

}
