import { AuthModule } from './auth/auth.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { PageRoutingModule } from './page-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PageComponent } from './page.component';
import { AuthComponent } from './auth/auth.component';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    SidemenuComponent,
    PageComponent,
    AuthComponent,
    TableComponent,


  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatIconModule,
    HttpClientModule,
   
    PageRoutingModule,
    MatPaginatorModule
  
  
  ],
  exports:[
    AuthComponent
 
  
  ]
})
export class PageModule { }
