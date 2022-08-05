import { PageComponent } from './page/page.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'auth',pathMatch:'full'},
  {path:'auth', 
   loadChildren : ()=> import('./page/auth/auth.module').then(m=>m.AuthModule)},
   {path:'page',component:PageComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
