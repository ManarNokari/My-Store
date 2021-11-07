import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage} from '@angular/fire/compat/Storage';
import { Good } from '../interfaces/good.interface';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private fs: AngularFirestore, private afs: AngularFireStorage) { }

  getAllGoods(){
    return this.fs.collection<Good>('goods').snapshotChanges();
  }

  addNewGood(name?: string, price?: number, image?: File){
    let ref = this.afs.ref('goods/' + image!.name)
    ref.put(image).then(() => {
      ref.getDownloadURL().subscribe(photoUrl => {
        this.fs.collection('goods').add({
          name,
          price,
          photoUrl
        })
      })
    })

  }
}
