import { Component, OnInit } from '@angular/core';
import { Roles } from './data/Roles';
@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.scss']
})
export class AdministratorComponent implements OnInit {

  clickedIndex:any;
  checked:boolean=false;
  active:boolean=false
  constructor() { }

  role_categories:any=Roles;
  permission_array:Array<any>=[];

  ngOnInit(): void {
    console.log(this.role_categories);

  }


  show_permission(role:any){

    console.log(role.permissions);
    this.permission_array=role.permissions;

  }
  role_active(role:any){
    role.active=!role.active;

  }

  deactive_checbox(ability:any)
  {
    ability.reset();
    ability.active=!ability.active;
  }

}
