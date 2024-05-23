import {Component, OnInit} from '@angular/core';
import {CreateProductService} from "../Services/create-product.service";

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit{

  allProductList:any=[]
  constructor(private productService:CreateProductService) {
  }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct(){
    this.productService.getAllProduct().subscribe((response)=>{
      if(response.error){

      }else {
        console.log(response);
        this.allProductList = response;
      }
    });
  }

}
