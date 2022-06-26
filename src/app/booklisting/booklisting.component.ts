import { Component, OnInit } from '@angular/core';
import { MOCK_DATA } from './data/data';
@Component({
  selector: 'app-booklisting',
  templateUrl: './booklisting.component.html',
  styleUrls: ['./booklisting.component.scss']
})
export class BooklistingComponent implements OnInit {
  fullAddress:string="";
  bookList: Array<any> = MOCK_DATA;

  constructor() { }

  ngOnInit(): void {
    console.log(this.bookList);
    // console.log(this.bookList[0]);

  }



  getFullName(name:any){
    return name.firstname+name.lastname;
  }

getFullAddress(region:any){

  // this.fullAddress="";
  // for(let location of Object.values(region))
  // {
    // this.fullAddress+=location;

  // }
  return region.city+" "+","+" "+region.state+" "+","+" "+region.country+" "+","+" "+region.address+" "+","+" "+region.zipcode;

}





}
