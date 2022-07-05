import { Component } from '@angular/core';
import { Roles } from './administrator/data/Roles';
import { Datatype } from './datat.service';

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




export class AppComponent {
  title = 'dailytask';

  getData(){
    const data:Datatype={
        name:'hosds',
        id:10,
        Indian:true
    }
  }

}
