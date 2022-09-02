import { Injectable } from '@angular/core';
import { product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: product []  =[];

  constructor() { 
    //this.productList.push({"prodctName":"Laptop", "productType":"Electronic", "productId":1, "productQty":70, "productAmt":51000});
  }

  getProdctList() {
    return this.productList;
  }

  addProduct(newProd: product) {
    this.productList.push(newProd);
  }

  findProductById(prodId:any) {
    return this.productList[prodId-1];
  }
}
