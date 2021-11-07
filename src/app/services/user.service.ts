import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../interfaces/user.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFirestore, private as: AuthService) { }

  addNewUser(id?: string , name?: string, address?: string ){
    return this.afs.doc('users/' + id).set({
      name,
      address
    })
  }

  getUserData() {
    return this.afs.doc<boolean>('users/' + this.as.userId).valueChanges()
  }
}
