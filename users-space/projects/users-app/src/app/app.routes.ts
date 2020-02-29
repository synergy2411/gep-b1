import { Routes } from '@angular/router';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { UserComponent } from './components/users/users.component';
import { ProductComponent } from './components/product/product.component';
import { OverviewComponent } from './components/product/overview/overview.component';
import { SpecifictionComponent } from './components/product/specifiction/specifiction.component';
import { LoginGaurdService } from './services/login-gaurd.service';

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
},{
  path : "products",
  component : ProductComponent,
  canActivate : [LoginGaurdService],
  children : [{
    path : "overview/:id/:name",
    component : OverviewComponent
  }, {
    path : "spec",
    component : SpecifictionComponent
  }]
}, {
  path : "lazy",
  loadChildren : "./lazy/lazy.module#LazyModule",         // path/to/module/ModuleFileName#ModuleClassName
  // loadChildren : () => import("./lazy/lazy.module").then(m => m.LazyModule)
},{
  path : "**",
  redirectTo : "users",
  pathMatch : "full"
}]
