import { Component, OnInit } from '@angular/core';
import { Crick } from '../crick';
import { CricketService } from '../cricket.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  public Crickets:Crick[]=[];
  constructor(private _cricService:CricketService) { }

  ngOnInit(): void {
  
this.Crickets = this._cricService.getPlayer();

  }
}
