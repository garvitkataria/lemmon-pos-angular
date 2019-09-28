import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-service-plan',
  templateUrl: './service-plan.component.html',
  styleUrls: ['./service-plan.component.css']
})
export class ServicePlanComponent{
	plans:any=[];
	service:any;
	my_plans:any[]=[];
	buy_plan:any;
	buy_shipping_plan_flag=0;
	buy_tracking_plan_flag=0;
	constructor(private dataService:DataService, private router:Router)
	{
		console.log("users");
		this.service = JSON.parse(localStorage.getItem("service"));
		console.log(this.service);
		
		this.dataService.getPlans().subscribe((plans:any)=>{
			console.log(JSON.parse(plans._body)._items);
			this.plans = JSON.parse(plans._body)._items;

			for (var i = this.service.plans.length - 1; i >= 0; i--) {
				this.my_plans.push(this.plans[this.service.plans[i]-1]);
			}
		});

		
	}
	showService(plan)
	{
		console.log(plan)
		this.buy_plan=plan
		if(plan.id<=4)
			this.buy_shipping_plan_flag = 1
		else
			this.buy_tracking_plan_flag = 1
	}

	checkout()
	{
		localStorage.setItem('checkout',   JSON.stringify(this.buy_plan));
		this.router.navigate(['/payment'])
	}
	nav_route(x)
	{
		console.log(x)
		this.router.navigate(['/'+x])
	}

}
