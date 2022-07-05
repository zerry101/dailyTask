import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  users()
  {
    return[
    {name:'zishan', age:20 , id:20},
    {name:'aman' , age:22 , id:22},
    {name:'sohel' , age:21 , id:21}
    ]
  }
}
