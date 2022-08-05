import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  public isActive : boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  active(){
    if(!this.isActive)
      this.isActive=true;
    else  this.isActive=false;
  }
}
