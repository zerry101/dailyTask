import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
baseUrl:string ='https://jsonplaceholder.typicode.com'
  constructor(private http:HttpClient) {}
  users(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
