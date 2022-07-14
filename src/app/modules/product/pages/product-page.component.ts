import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/Product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',  
})
export class ProductPageComponent implements OnInit {
  @Input() typeButton: string = 'Insertar';
  
  formGroup:FormGroup = new FormGroup({}); 
  product: Product = new Product();
  
  
  constructor(private router: ActivatedRoute, private route: Router, private productService: ProductService) { 
    this.formGroup = new FormGroup({
      description: new FormControl("", Validators['required']),
      price : new FormControl("", Validators['required']),
    });
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
    this.productService.getProduct(this.router.snapshot.params['id']).subscribe( (product: Product) => {      
      this.product = Object.assign(new Product(), product);      
      this.formGroup.get('description')?.setValue(this.product.description);
      this.formGroup.get('price')?.setValue(this.product.price);      
    });  
  }

  hasNotBeenEdited(): boolean {            
    return this.product.isDescription(this.formGroup.get('description')?.value) || this.formGroup.invalid;
  }


  onBack() {    
    this.route.navigate(['/']);
  }

  onSubmit() {       
    this.product.setDescription(this.formGroup.get('description')?.value);
    this.product.setPrice(this.formGroup.get('price')?.value);
    this.productService.updateProduct(this.product);
  }

}
