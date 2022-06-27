import { Component, OnInit } from '@angular/core';
import { MOCK_DATA } from './data/data';
@Component({
  selector: 'app-booklisting',
  templateUrl: './booklisting.component.html',
  styleUrls: ['./booklisting.component.scss']
})
export class BooklistingComponent implements OnInit {
  fullAddress: string = "";
  bookList: Array<any> = MOCK_DATA;

  constructor() { }

  ngOnInit(): void {
    console.log(this.bookList);
  }

  getFullName(name: any) {
    return `${name.firstname} ${name.lastname}`;
  }

  getFullAddress(region: any) {
    return `${region.address}, ${region.city}, ${region.state}, ${region.country}, ${region.zipcode}`;
  }
}
