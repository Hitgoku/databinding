import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fName = "default First Name";
  lName = "default Last Name";
  email = "";
  pass ="";
  fNameProperty = "Enter First Name ";
  lNameProperty = "Enter Last Name ";
  fNamengError = {};
  lNamengError = {};
  emailngError = {};
  passngError = {};
  isEmailPresent = true;
  


  loadUserNameFromCache() {
    this.fName ="";
    this.lName = "";
  }

  checkTheFileds() {

    if(this.fName === "" || this.lName === '' || this.email === '' || this.pass === '') {
      alert('all fields are mandetory');
      
    }
    this.fNamengError = {"bg-danger":this.fName.length<=0};
      this.lNamengError = {"bg-danger":this.lName.length<=0};
      this.emailngError = {"bg-danger":this.email.length<=0};
      this.passngError = {"bg-danger":this.pass.length<=0};

      this.isEmailPresent = this.email.length>0;

  }
  

}
