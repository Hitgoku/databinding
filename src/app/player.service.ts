import { Injectable } from '@angular/core';
import { Crick } from './crick';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  CricketList : Crick[] = [];
  constructor() { }

  addPlayer(abc : Crick) {
    this.CricketList.push(abc);
  }

  getPlayer() {
    return this.CricketList;
  }

  getProductById(id : number) {
    return this.CricketList[id];
  }
}
