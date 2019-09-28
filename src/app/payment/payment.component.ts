import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
	checkout_plan:any;

	constructor(private router:Router) 
	{ 
		this.checkout_plan = JSON.parse(localStorage.getItem("checkout"));
		console.log(this.checkout_plan)
	}
	handler:any = null;
	
  ngOnInit() {
  	this.loadStripe();
  }
	loadStripe() {
	     
	    if(!window.document.getElementById('stripe-script')) {
	      var s = window.document.createElement("script");
	      s.id = "stripe-script";
	      s.type = "text/javascript";
	      s.src = "https://checkout.stripe.com/checkout.js";
	      window.document.body.appendChild(s);
	    }
	}
	pay(amount) {    
	 
	    var handler = (<any>window).StripeCheckout.configure({
	      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
	      locale: 'auto',
	      token: function (token: any) {
	        // You can access the token ID with `token.id`.
	        // Get the token ID to your server-side code for use.
	        console.log(token)
	        alert('Token Created!!');

	      }

	    });
	 
	    handler.open({
	      name: 'POS Demo Site',
	      description: 'Services Payment',
	      amount: amount * 100
	    });
	 	
	}
	nav_route(x)
	{
		console.log(x)
		this.router.navigate(['/'+x])
	}

	

}
