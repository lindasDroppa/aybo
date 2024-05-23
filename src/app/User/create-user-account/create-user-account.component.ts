import { Component } from '@angular/core';
import {CreateProductService} from "../Services/create-product.service";

@Component({
  selector: 'app-create-user-account',
  templateUrl: './create-user-account.component.html',
  styleUrls: ['./create-user-account.component.css']
})
export class CreateUserAccountComponent {

  constructor(private service:CreateProductService)
  {
  }

  owner_id:any;
  images:{base64:string}[] = [];
  name = '';
  description = '';
  amount = '' ;
  category = '';
  sendImages :any;
  quantity = '';
  onFileSelected(event: any) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!file.type.startsWith('image/')) {
        alert('Please select only image files.');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        this.images.push({ base64 });
      };
      reader.readAsDataURL(file);
      this.sendImages=this.images;
    }
  }

  submitProduct(){
    let id: any;
    id = localStorage.getItem("userDetails");
    const owner=id?.id;
    const product= {
      name:this.name,
      description:this.description,
      amount:this.amount,
      category:this.category,
      images:this.images,
      quantity:this.quantity,
      owner_id:owner
    }


    console.log(product)
    this.service.createProduct(product).subscribe(
      (response) => {

        if(response.error){
          alert("Error");
        }else{
          alert("Success")
        }
      });

  }

}
