import { Injectable } from '@angular/core';
import { Crick } from './crick';

@Injectable({
  providedIn: 'root'
})
export class CricketService {

  CricketList: Crick[] = [];
  constructor() { }
  getPlayer() {
    return this.CricketList;
  }

  addPlayer(newabc: Crick) {
    this.CricketList.push(newabc);
  }
  // display() {
  //   return "Congratulations !!! You are Selected in Indian Team";
  // }
  getProductById(id : number) {
    return this.CricketList[id];
  }
}


