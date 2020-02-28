import { Routes } from '@angular/router';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { UserComponent } from './components/users/users.component';

export const APP_ROUTES : Routes = [{
  path : "",                      // http://localhost:4200
  redirectTo : "/users",
  pathMatch : "full"
}, {
  path : 'users',               // http://localhost:4200/users
  component : UserComponent
},{
  path : "pipe",
  component : PipeDemoComponent
}, {
  path : "observable",
  component : ObservableDemoComponent
}, {
  path : "**",
  redirectTo : "users",
  pathMatch : "full"
}]
