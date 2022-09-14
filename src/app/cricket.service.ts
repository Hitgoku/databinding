import { Injectable } from '@angular/core';
import { Crick } from './crick';

@Injectable({
  providedIn: 'root'
})
export class CricketService {

  CricketList: Crick[] = [];
  constructor() { 
  this.CricketList =  [{
      "CricketName": "Sachin",
      "T20Runs": 777,
      "ODIRuns": 777,
      "TestRuns": 999,
      "playerPicUrl": ""
  },
  {
    "CricketName": "Dhoni",
    "T20Runs": 777,
    "ODIRuns": 777,
    "TestRuns": 999,
    "playerPicUrl": ""
},
{
  "CricketName": "Uv",
  "T20Runs": 777,
  "ODIRuns": 777,
  "TestRuns": 999,
  "playerPicUrl": ""
},
{
  "CricketName": "Kohli",
  "T20Runs": 777,
  "ODIRuns": 777,
  "TestRuns": 999,
  "playerPicUrl": ""
}];
  }
  getPlayer() {
    console.log(this.CricketList);
    return this.CricketList;
  }

  addPlayer(newabc: Crick) {
    console.log(this.CricketList);
    this.CricketList.push(newabc);
  }
  editPlayer(newabc: Crick, id:number) {
    
    this.CricketList[id] =newabc;
  }
  getProductById(id : number) {
    console.log(this.CricketList);
    return this.CricketList[id];
  }

  }



