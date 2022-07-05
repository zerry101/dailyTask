import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    userid:string | null|undefined;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("id is ",this.route.snapshot.paramMap.get('id'));
    this.userid=this.route.snapshot.paramMap.get('id');
  }

}
