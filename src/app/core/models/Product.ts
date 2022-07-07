export class Product {
  id: number;
  image: string;
  description: string;
  price: number;

  constructor(id: number, image: string, description: string, price: number) {
    this.id = id;
    this.image = image;
    this.description = description;
    this.price = price;
  }

  setDescription(description: string) {
    this.description = description;
  }

  setImage(image: string) {
    this.image = image;
  }

  setPrice(price: number) { 
    this.price = price;
  }
}