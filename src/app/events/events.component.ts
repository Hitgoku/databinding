import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../product';
import { ProductService } from '../product.service';
import { Productservice } from '../productservice';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  title = "form page";

  ngOnInit(): void {
    const xyz = new Productservice(); 
    xyz.showPageAlert(this.title);
  }
  prodName = "";
  prodId = 0;
  prodQty = 0;
  prodAmt =0;
  fNameProperty = "Product Name ";
  lNameProperty = "Prodcut Id ";
  fNamengError = {};
  lNamengError = {};
  emailngError = {};
  passngError = {};
  isEmailPresent = true;
  

  addNewProdct() {
    let newProduct:product =  {prodctName:this.prodName, productType:"", productId:this.prodId, productAmt:this.prodAmt, productQty:this.prodQty};
    this.productService.addProduct(newProduct);
    this.router.navigateByUrl('/productList');

  }


  // loadUserNameFromCache() {
  //   this.fName ="";
  //   this.lName = "";
  // }

  // checkTheFileds() {

  //   if(this.fName === "" || this.lName === '' || this.email === '' || this.pass === '') {
  //     alert('all fields are mandetory');
      
  //   }
  //   this.fNamengError = {"bg-danger":this.fName.length<=0};
  //     this.lNamengError = {"bg-danger":this.lName.length<=0};
  //     this.emailngError = {"bg-danger":this.email.length<=0};
  //     this.passngError = {"bg-danger":this.pass.length<=0};

  //     this.isEmailPresent = this.email.length>0;

  // }
  

}
