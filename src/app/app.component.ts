import { Component } from '@angular/core';
import { Roles } from './administrator/data/Roles';
import { Datatype } from './datat.service';
import { UserdataService } from './services/userdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


// data:UserDataService;

// ngOnInit(): void {
//   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//   //Add 'implements OnInit' to the class.

// }

// console.log(Roles);


// const userData1:{name:string, age:number , id:number}[]=[];

export class AppComponent {
  title = 'dailytask';

 userData77:any;

constructor(private ud:UserdataService){
  console.log(this.ud.users);
this.userData77=this.ud.users();
}




  getData(){
    const data:Datatype={
        name:'hosds',
        id:10,
        Indian:true
    }
  }

}
