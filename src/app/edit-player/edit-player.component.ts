import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Crick } from '../crick';
import { CricketService } from '../cricket.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  
  playerData : Crick;
   playerId :any;
  constructor(private myService: CricketService, private activeRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.playerId = this.activeRoute.snapshot.paramMap.get("playerId");
    this.playerData = this.myService.getProductById(this.playerId);

  }
  updatePlayer() {
    this.myService.editPlayer(this.playerData, this.playerId);
    this.router.navigateByUrl('/Playerlist');


  }

}
