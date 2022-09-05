import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CricketService } from '../cricket.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-playerview',
  templateUrl: './playerview.component.html',
  styleUrls: ['./playerview.component.css']
})
export class PlayerviewComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute ,
    private viewplayer : CricketService) { }
  playerDataToView: any = {} ;

  ngOnInit(): void {
    let playerId: any = this.activatedRoute.snapshot.paramMap.get("playerId");
    //alert(productId);
    this.playerDataToView = this.viewplayer.getProductById(playerId);
  }


}
