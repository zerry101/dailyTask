import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})



export class UserDataService {

  url:string="https://jsonplaceholder.typicode.com";

  constructor(private  http:HttpClient ) {  }

  users(){
     return this.http.get(`${this.url}/posts`);
  }
}
