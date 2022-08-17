import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pb1',
  templateUrl: './pb1.component.html',
  styleUrls: ['./pb1.component.css']
})
export class PB1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public user ="Hitesh";
  public pb = "bg-danger";
}
