import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ServicePlanComponent } from './service-plan/service-plan.component';

import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentComponent } from './payment/payment.component';
export const router: Routes = [
    { path: '', component: HomeComponent },
    { path: 'plans', component: ServicePlanComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'payment', component: PaymentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ServicePlanComponent,
    HomeComponent,
    OrdersComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
