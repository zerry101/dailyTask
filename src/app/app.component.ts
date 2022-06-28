import { Component } from '@angular/core';
// import { UsersDataService } from './booklisting/services/users-data.service';

import { UserDataService } from './booklisting/services/user-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// data:UserDataService;

export class AppComponent {
  title = 'dailytask';


  user_data:any;

  constructor(private userData:UserDataService){


    this.userData.users().subscribe((data)=>{
      this.user_data=data
      console.log(this.user_data);
    });

  }

  // getPostData(){

  // }


}
