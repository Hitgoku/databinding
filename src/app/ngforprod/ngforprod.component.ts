import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngforprod',
  templateUrl: './ngforprod.component.html',
  styleUrls: ['./ngforprod.component.css']
})
export class NgforprodComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public products = [
    {prodname:"Mobiles", prodid:2036, Quantity:6, Total:6},
    {prodname:"Electronics", prodid:2024, Quantity:4 , Total:4},
    {prodname:"Home Appliance", prodid:2080, Quantity: 5, Total:5},
    {prodname:"Clothing", prodid:2505, Quantity: 8, Total:8}
  ];
  addprod(index:number) {
    this.products.push(this.products[index]);
  } 

  deleteprod(index:number) {
    if(confirm("Are you sure to delete "+this.products[index].prodname+" data")) {
      this.products.splice(index,1);
    }
  }
}
