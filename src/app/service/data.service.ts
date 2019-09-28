import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class DataService 
{
	server="Https://anuragintern.appspot.com";
	headers:any;
  	constructor(public http:Http) 
  	{
  		this.headers = new Headers({'Content-Type': 'application/json'}); 
  	}
	getServices()
	{

		return (this.http.get(this.server+'/services',this.headers))
	}
	getPlans()
	{
		return this.http.get(this.server+'/plans',this.headers)
	}
	getOrders()
	{
		return this.http.get(this.server+'/shipping/?_expand=plan',this.headers)
	}
}
