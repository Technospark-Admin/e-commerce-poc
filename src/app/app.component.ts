import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationStart, Router } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ecommerce';
  headerEnable = true;
  constructor(public cartService: CartService,private router: Router){
    this.router.events.subscribe(event =>{
      if (event instanceof NavigationStart){
        console.log("Route event: ", event);
        if(event.url.includes( "login")){
            this.headerEnable = false;
          } else {
            this.headerEnable = true;
          }
      }
   })
  }
  ngOnInit(): void {
    
  
  }
  printCart(){
    this.cartService.printCart();
  }
}
