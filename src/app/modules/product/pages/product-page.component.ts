import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/Product';
import { TypeButton } from 'src/app/core/types/TypeButton';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',  
})
export class ProductPageComponent implements OnInit {
  @Input() typeButton: string;
  
  formGroup:FormGroup = new FormGroup({}); 
  product: Product = new Product();
  
  
  constructor(private router: ActivatedRoute, private route: Router, private productService: ProductService) { 
    this.typeButton =  TypeButton.CREATE;
    this.formGroup = new FormGroup({
      description: new FormControl("", Validators['required']),
      price : new FormControl("", Validators['required']),            
    });
    this.product.setImage('https://is.gd/1nGf23');
  }


  onFileSelected(file: any) {
    if(file.target.files){
      var reader= new FileReader();
      reader.readAsDataURL(file.target.files[0]);
      reader.onload=(event:any)=>{
        this.product.image =event.target.result;
      }
    }
  }
    
  ngOnInit(): void {        
    if (this.typeButton === TypeButton.UPDATE){
      this.productService.getProduct(this.router.snapshot.params['id']).subscribe( (product: Product) => {      
        this.product = Object.assign(new Product(), product);      
        this.formGroup.get('description')?.setValue(this.product.description);
        this.formGroup.get('price')?.setValue(this.product.price);                      
      });  
    }
  }

  submitDisabled(): boolean {                 
    return (!this.isNewProduct() || this.formGroup.invalid);
  }

  isNewProduct() {        
    return !this.product.isDescription(this.formGroup.get('description')?.value) || !this.product.isPrice(this.formGroup.get('price')?.value);
  }


  onBack() {    
    this.route.navigate(['/']);
  }

  onSubmit() {      
    if (this.typeButton === TypeButton.CREATE) {         
      let result:Product = new Product(0, this.product.image, this.formGroup.get('description')?.value, this.formGroup.get('price')?.value);
      this.productService.newProduct(result).subscribe( () => 
        {this.formGroup.reset()      
        this.product.image = 'https://is.gd/1nGf23';  }
      );              
    } else {      
      this.product.setDescription(this.formGroup.get('description')?.value);
      this.product.setPrice(this.formGroup.get('price')?.value);
      this.productService.updateProduct(this.product);      
    }
  }

}
