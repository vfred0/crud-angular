import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',  
})
export class CardComponent {
  @Input() id: number = 1;
  @Input() productName: string = 'Camiseta de prueba';
  @Input() price: number = 13.99;
  @Input() image: string =  
    'https://imgs.search.brave.com/V5Y8SJYlqQG79-DGwjAV_qg6RW9G2Jmf8mtWvG6pg4c/rs:fit:861:1200:1/g:ce/aHR0cHM6Ly9zLnlp/bWcuY29tL2FhaC9t/aWxpdGFyeWJlc3Qv/dS1zLW5hdnktdmll/dG5hbS1kZW5pbS1z/aGlydC0yNS5naWY.gif';
  
  constructor(private router: Router) { }

  onClick(): void {
    console.log('Clicked on ', this.id, this.router.getCurrentNavigation());    
    this.router.navigate(['/product', this.id]);  
    
  }
}
