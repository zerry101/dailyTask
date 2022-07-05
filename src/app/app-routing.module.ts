import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    component:AboutComponent,
    path:'about',
    children:[
      {
      component:AboutCompanyComponent,
      path:'aboutcompany'
      },
      {
        component:AboutMeComponent,
        path:'aboutme'

      }
    ]
  },
  {
    component:HomeComponent,
    path:'home'
  },
  {
    component:UserComponent,
    path:'user/:id'

  },
  {
    component:PageNotFoundComponent,
    path:'**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
