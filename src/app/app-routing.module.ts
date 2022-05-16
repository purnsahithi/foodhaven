import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JoinusComponent } from './joinus/joinus.component';
import { PaymentComponent } from './payment/payment.component';
import { ShopComponent } from './shop/shop.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'joinus',component:JoinusComponent},
  {path:'payment',component:PaymentComponent},
  {path:'shop',component:ShopComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'',redirectTo:'/home',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
