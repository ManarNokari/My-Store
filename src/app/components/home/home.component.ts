import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Good } from 'src/app/interfaces/good.interface';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  goods: Good[] = [];
  goodsObservable: Subscription = new Subscription;
  add: number = -1;
    // {name: "mango", price: 4.5, photoUrl: "assets/mango.png"},
    // {name: "zuccini", price: 1.90, photoUrl: "assets/zuccini.png"},
    // {name: "potato", price: 2.98, photoUrl: "assets/potato.png"},
    // {name: "grapes", price: 3.99, photoUrl: "assets/grapes.png"},
    // {name: "melon", price: 2.50, photoUrl: "assets/melon.png"},
    // {name: "cherry", price: 4.30, photoUrl: "assets/cherry.png"},
    // {name: "avocado", price: 3.97, photoUrl: "assets/avocado.png"},
    // {name: "aubergine", price: 2.99, photoUrl: "assets/aubergine.png"},
    // {name: "mushroom", price: 3.50, photoUrl: "assets/mushroom.png"},
    // {name: "pomegranate", price: 2.99, photoUrl: "assets/pomegranate.png"},
    // {name: "lettuce", price: 3.30, photoUrl: "assets/lettuce.png"},
    // {name: "garlic", price: 2.99, photoUrl: "assets/garlic.png"},
    // {name: "appel", price: 1.5, photoUrl: "assets/apple.png"},
    // {name: "strawberry", price: 3.99, photoUrl: "assets/strawberry.png"},
    // {name: "haricot", price: 3.90, photoUrl: "assets/haricot.png"},
    // {name: "plum", price: 2.55, photoUrl: "assets/plum.png"},
    // {name: "tomato", price: 2.3, photoUrl: "assets/tomato.png"},
    // {name: "parsley", price: 1.98, photoUrl: "assets/parsley.png"},
    // {name: "nopal", price: 2.90, photoUrl: "assets/nopal.png"},
    // {name: "onions", price: 1.99, photoUrl: "assets/onions.png"},
    // {name: "orange", price: 2, photoUrl: "assets/orange.png"},
    // {name: "pepper", price: 1.98, photoUrl: "assets/pepper.png"},
    // {name: "gherkin", price: 3.96, photoUrl: "assets/gherkin.png"},
    // {name: "radish", price: 2.99, photoUrl: "assets/radish.png"},
  

  constructor(private gs: GoodsService, private cs: CartService, private as: AuthService, private router: Router) {
    
   }

  ngOnInit(): void {
    this.goodsObservable = this.gs.getAllGoods().subscribe(data => {
      this.goods = data.map(element => {
        return{
          id: element.payload.doc.id,
        ...element.payload.doc.data() as {}
        } 
      })
    }) 
  }

  ngOnDestroy(){
    this.goodsObservable.unsubscribe();
  }

  addToCart(index: number){
    if (this.as.userId) this.add = +index; 
    else this.router.navigate(['/login']);
  }

  buy(amount: number | string){
    let selectedGood = this.goods[this.add];
    let data = {
      name: selectedGood.name,
      amount: +amount,
      price: selectedGood.price
    }
    this.cs.addToCart(data).then(() => this.add = -1)
  }

}
