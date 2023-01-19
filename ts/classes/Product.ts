export class Product {
	public photo: string
	public clothes: string;
	public description: string;
	public stars: number;
	public price: string;
	public discount: string;

    constructor(photo: string, clothes: string, description: string, stars: number, price: string, discount: string) {
      this.photo = photo;
      this.clothes = clothes;
      this.description = description;
      this.stars = stars;
      this.price = price;
      this.discount = discount;
    }
}