import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html'
})
export class ProductPageComponent implements OnInit {
  formGroup:FormGroup = new FormGroup({}); 
  constructor(private router: ActivatedRoute, private route: Router) { 
  
  }
  
  ngOnInit(): void {    
    console.log("XXXXXXXXXXX",  this.router.snapshot.params['id'] );
    this.formGroup = new FormGroup({
      productName: new FormControl('Otro nombre de camisa', Validators['required']),
      productPrice : new FormControl('12.89', Validators['required']),
    },
    {
      validators: this.checkProduct
    }
    
    );
    
  }

  checkProduct(check: AbstractControl | FormGroup): any {        
    return  check.get('productName')?.value === 'Otro nombre de camisa' ? {'productName': true} : null;    
  }

  hasBeenEdited(): boolean {
    return this.formGroup.invalid;
  }

  onSubmit() {
    console.log("Botones");
  }

  onBack() {
    console.log("Regresar");
    this.route.navigate(['/']);
  }

}
