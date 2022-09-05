import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Crick } from '../crick';
import { CricketService } from '../cricket.service';


@Component({
  selector: 'app-crick',
  templateUrl: './crick.component.html',
  styleUrls: ['./crick.component.css']
})
export class CrickComponent implements OnInit {

  constructor(private _cricketservice : CricketService,private route: Router) {  }

  ngOnInit(): void {
  }
  Cric ="";
  T20 = 0;
  ODI= 0;
  Test = 0;
  addNewPlayer() {
    let newPlayer:Crick =  {CricketName:this.Cric, T20Runs:this.T20, ODIRuns:this.ODI, TestRuns:this.Test};
    this._cricketservice.addPlayer(newPlayer);
    this.route.navigateByUrl('/Playerlist');
}
}