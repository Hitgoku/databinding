import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public isSuccess = true;
  public isError = false;
  public isInfoData = true;

  public dynamicStyle = {'backGround-color-success':this.isSuccess,
'backGround-color-error':this.isError, 'backGround-color-info':this.isInfoData};

}
