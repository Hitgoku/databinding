import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productId = 0;
  productName = "";
  product : any = null;
  constructor(private activatedRoute: ActivatedRoute, private prodServ: ProductService) { }

  ngOnInit(): void {
    this.product = this.prodServ.findProductById(this.activatedRoute.snapshot.paramMap.get("id"));
    this.productId = this.product.productId;
    this.productName = this.product.prodctName;
  }

}
