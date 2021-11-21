import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items = [];
  private totalAmount = 0;
  private cartSubject = new BehaviorSubject(null);
  constructor() { 
    if(this.items && this.items.length == 0){
      let records = JSON.parse(localStorage.getItem("cartItems"));
      if(records){
        this.items = records;
        this.calculateTotalAmount();
        this.cartSubject.next({items:this.items,totalAmount:this.totalAmount,status:false});
      }
    }  
  }

  getCartSubject(){
    return this.cartSubject;
  }


  addToCart(product,quantity){
    let index = -1;
    this.items.forEach((item,i) => {
      if(item.product.id === product.id){
        index = i
      }
    });
    if(index === -1){
      this.items.push({product: product, quantity:quantity});
    } else {
      this.items[index].quantity++;
    }
    this.calculateTotalAmount();
    this.saveToLocalStorage();
    this.cartSubject.next({items:this.items,totalAmount:this.totalAmount,status:true});
  }


  printCart(){
    console.log(this.items);
    console.log("Total Amount: $"+this.totalAmount);
  }

  calculateTotalAmount() {
    this.totalAmount = 0;
    this.items.forEach(item => {
     this.totalAmount = this.totalAmount + item.product.price * item.quantity;
    });
    console.log("Total Amount: $"+this.totalAmount);
  }

  saveToLocalStorage(){
    localStorage.setItem("cartItems",JSON.stringify(this.items));
  }

}


