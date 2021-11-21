import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path:"",redirectTo: "login",pathMatch: "full"},
  {path:"login",component:LoginComponent},
  {path:"login/:out",component:LoginComponent},
  {path:"home",component:ProductsComponent, canActivate: [AuthGuard] , pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
