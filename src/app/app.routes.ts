import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Dashboard } from './admin/dashboard/dashboard';
import { Destinations } from './admin/destinations/destinations';
import { authGuard } from './guards/auth-guard';
import { Hotels } from './admin/hotels/hotels';
import { DestinationsPublic } from './public/destinations/destinations';
import { HotelsPublic } from './public/hotels/hotels';
import { Home } from './public/home/home';
import { PlaceDetails } from './public/place-details/place-details';
import { Users } from './admin/users/users';
import { Contact } from './public/contact/contact';

export const routes: Routes = [
  {path:'',component:Home},
  {path:'login',component:Login},
  {path:'destinations/:id',component:PlaceDetails},
  {path:'destinations',component:DestinationsPublic},
  {path:'hotels',component:HotelsPublic},
  {path:'contacts',component:Contact},
  {path:'admin',component:Dashboard,
    canActivate:[authGuard],
    children:[
      {path:'destinations',component:Destinations},
      {path:'hotels',component:Hotels},
      {path:'users',component:Users}
    ]
  },
  {path:'',redirectTo:'login',pathMatch:'full'}

];


