import { Component } from "@angular/core";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  pageTitle: string = "Product List";
  products: any[] = [
    {
      "productID": 2,
      "productName": "A4 Paper",
      "productCode": "P-RSA4",
      "releaseDate": "January 20, 2003",
      "description": "Set of 300 renewed A4 size papers",
      "price": 32.99,
      "starRating": 4.2,
      "imageURL": "https://sc02.alicdn.com/kf/UTB8qDqZtYPJXKJkSafSq6yqUXXaj.jpg_350x350.jpg"
    },
    {
      "productID": 3,
      "productName": "Sticky Notes",
      "productCode": "P-SN20",
      "releaseDate": "April 5, 2004",
      "description": "Bundle of 40 Sticky Notes",
      "price": 4.9,
      "starRating": 4.8,
      "imageURL": "https://5.imimg.com/data5/PX/IX/MY-38990110/post-it-sticky-notes-500x500.jpg"
    }
  ];
}