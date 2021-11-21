import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product:any;

  @Output() productChange = new EventEmitter();

  constructor(public cartService:CartService) { }

  ngOnInit() {
  }

  addToCart(){
    this.cartService.addToCart(this.product,1);
  }

}
