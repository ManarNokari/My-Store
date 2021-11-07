import { Component, OnInit } from '@angular/core';
import { Shopping } from 'src/app/interfaces/shopping.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Shopping[] = [];

  constructor(private cs: CartService) { }

  ngOnInit(): void {
    this.cs.getCart().subscribe(cart => {
      this.cart = cart.map(element => {
        return {
          id: element.payload.doc.id,
          ...element.payload.doc.data() as {}
        }
      })
      
    })
  }

  delete(index: number) {
    this.cs.delete(this.cart[index].id!)
  }

  update(index: number){
    this.cs.save(this.cart[index].id!, this.cart[index].amount!)
  }

}
