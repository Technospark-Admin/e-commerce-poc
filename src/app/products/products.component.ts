import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { AppComponent } from '../app.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[];
  totalNumberOfItems = 0;
  constructor(public cartService:CartService,private _snackBar: MatSnackBar,private router: ActivatedRoute) { }
  cart = {
    items:[],totalAmount:0,status:false
  }
  ngOnInit() {
    let url = this.router.snapshot.pathFromRoot.map((v) => v.url.map((segment) => segment.toString()).join('/')).join('/');
    console.log("url: ",url);
    this.products = [
      {id:1, name:"Product1", price: 350},
      {id:2, name:"Product2", price: 450},
      {id:3, name:"Product3", price: 600},
      {id:4, name:"Product4", price: 800}
    ];
    this.cartService.getCartSubject().subscribe(cart => {
      if(cart){
        this.cart = cart;
        this.totalNumberOfItems = 0;
        this.cart.items.forEach(item => {
         this.totalNumberOfItems = this.totalNumberOfItems +item.quantity; 
        })

        if(cart.status){
          this._snackBar.open('Added to Cart sucessfully','Done');
        }

      }
    })
  }

}

// local storage
// api end points
// cart page route or a pop up
// user login logout

