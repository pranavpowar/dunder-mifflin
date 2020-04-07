import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  _listFilter: string = "A4 Paper";
  filteredProducts: IProduct[];

  get listFilter(): string {
    return this._listFilter; 
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  products: IProduct[] = [
    {
      "productId": 2,
      "productName": "A4 Paper",
      "productCode": "P-RSA4",
      "releaseDate": "January 20, 2003",
      "description": "Set of 300 renewed A4 size papers",
      "price": 32.99,
      "starRating": 4.0,
      "imageUrl": "https://sc02.alicdn.com/kf/UTB8qDqZtYPJXKJkSafSq6yqUXXaj.jpg_350x350.jpg"
    },
    {
      "productId": 3,
      "productName": "Sticky Notes",
      "productCode": "P-SN20",
      "releaseDate": "April 5, 2004",
      "description": "Bundle of 40 Sticky Notes",
      "price": 4.9,
      "starRating": 4.8,
      "imageUrl": "https://5.imimg.com/data5/PX/IX/MY-38990110/post-it-sticky-notes-500x500.jpg"
    }
  ];

  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = 'A4';
  }

  toggleVisiblity(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = "Product List : " + message;
  }

  ngOnInit(): void {
    console.log("OnInit Called");
  }
}