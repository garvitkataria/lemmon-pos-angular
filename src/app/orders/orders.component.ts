import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  	orders:any;
	constructor(private dataService:DataService, private router:Router)
	{
		this.dataService.getOrders().subscribe((orders:any)=>{
			console.log(JSON.parse(orders._body)._items);
			this.orders = JSON.parse(orders._body)._items
		});
	}
	nav_route(x)
	{
		console.log(x)
		this.router.navigate(['/'+x])
	}
}
