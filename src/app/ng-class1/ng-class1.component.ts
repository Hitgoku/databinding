import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class1',
  templateUrl: './ng-class1.component.html',
  styleUrls: ['./ng-class1.component.css']
})
export class NgClass1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public isSuccess = true;
  public isError = false;
  public isInfoData = false;

public hitesh1= {'text-bg-success':this.isSuccess,'text-bg-danger':this.isError,'text-bg-info':this.isInfoData};
}
