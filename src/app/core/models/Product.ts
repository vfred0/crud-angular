export class Product {
  
  id: number;
  image: string;
  description: string;
  price: number;

  constructor(id: number = 0, image: string = "", description: string = "", price: number = 0) {
    this.id = id;
    this.image = image;
    this.description = description;
    this.price = price;
  }

  getPrice(): number {
    return Number.parseInt(this.price.toFixed(2));
  }
  

  setDescription(description: string) {
    console.log(description);
    this.description = description;
  }

  setImage(image: string) {
    this.image = image;
  }

  setPrice(price: number) { 
    this.price = price;
  }

  isDescription(value: string): boolean {       
    return this.description === value;
  }
}