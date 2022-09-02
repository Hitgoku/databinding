import { Component, OnInit } from '@angular/core';
import { product } from '../product';
import { ProductService } from '../product.service';
import { Productservice } from '../productservice';

@Component({
  selector: 'app-ngforprod',
  templateUrl: './ngforprod.component.html',
  styleUrls: ['./ngforprod.component.css']
})
export class NgforprodComponent implements OnInit {

  title = "list page";

  public products:product [] = [];

  constructor(private prodService: ProductService) { }

  ngOnInit(): void {
    const abc = new Productservice();
    abc.showPageAlert(this.title);
    this.products = this.prodService.getProdctList();
  }
  
  
}
