import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  usersinfo:any;
  constructor(private userData11:UserdataService) {
    console.log(userData11.users());
    this.usersinfo=userData11.users();

   }

  ngOnInit(): void {
  }

}
