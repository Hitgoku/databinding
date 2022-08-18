import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-practice',
  templateUrl: './ng-for-practice.component.html',
  styleUrls: ['./ng-for-practice.component.css']
})
export class NgForPracticeComponent implements OnInit {

  constructor() { }
 // public days:Array<String> 
  public days = ['Monday','Tuesday','Wensday','Thusday','Friday','Saturday','Sunday'];
  public students = [
    {studentName:"Hitesh Mali", rollNo:1, subject: "Angular", email:"hitesh@gmail.com"},
    {studentName:"Bhushan Mahajan", rollNo:2, subject: "Angular", email:"bhushan@gmail.com"},
    {studentName:"Kanhaiyya V", rollNo:3, subject: "Angular", email:"Kanh@gmail.com"},
    {studentName:"Piyush More", rollNo:4, subject: "Angular", email:"piyush@gmail.com"}
  ];
  ngOnInit(): void {
  }

  addStudent(index:number) {
    this.students.push(this.students[index]);
  } 

  deleteStudent(index:number) {
    if(confirm("Are you sure to delete "+this.students[index].studentName+" data")) {
      this.students.splice(index,1);
    }
    
  } 

}
