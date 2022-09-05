import { Injectable } from '@angular/core';
import { Crick } from './crick';

@Injectable({
  providedIn: 'root'
})
export class CricketService {

  CricketList:Crick[]=[];
  constructor() { }
  getPlayer() {
    return this.CricketList;
  }

  addPlayer(newPlayer: Crick) {
    this.CricketList.push(newPlayer);
  }
  display(){
   return "Congratulations !!! You are Selected in Indian Team";
  }


  info:string[]=[];
  getinfo():string[]{
    return this.info;
  }
}
