import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Good } from '../interfaces/good.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private afs: AngularFirestore, private as: AuthService) { }

  addToCart(data: Good){
    return this.afs.collection(`users/${this.as.userId}/cart`).add(data);
  }

  getCart(){
    return this.afs.collection(`users/${this.as.userId}/cart`).snapshotChanges();
  }

  delete(id: string) {
    return this.afs.doc(`users/${this.as.userId}/cart/${id}`).delete();
  }

  save(id: string, amount: number){
    this.afs.doc(`users/${this.as.userId}/cart/${id}`).update({
      amount,
    })
  }
}
