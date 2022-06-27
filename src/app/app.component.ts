import { Component } from '@angular/core';
import { UsersDataService } from './booklisting/services/users-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dailytask';
  users:any
  constructor(private userData:UsersDataService)
  {

  }

  getPostData(){
    this.userData.users().subscribe(res=>{console.log(res);

    })
  }
}
