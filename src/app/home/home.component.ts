import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  	services:any;
	constructor(private dataService:DataService, private router:Router)
	{
		console.log("users");

		this.dataService.getServices().subscribe((services:any)=>{
			console.log(JSON.parse(services._body)._items);
			this.services = JSON.parse(services._body)._items
		});
	}
	showService(service)
	{
		console.log(service);
		localStorage.setItem('service',   JSON.stringify(service));
		this.router.navigate(['/plans'])
	}
	nav_route(x)
	{
		console.log(x)
		this.router.navigate(['/'+x])
	}

}
