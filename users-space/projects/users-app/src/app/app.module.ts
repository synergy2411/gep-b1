import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from "@angular/material/slider";
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";
import { ServiceWorkerModule } from '@angular/service-worker';
import { LibUtilModule } from 'gep-util';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";


import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { AlertComponent } from './components/alert/alert.component';
import { HeaderComponent } from './components/header/header.component';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { OverviewComponent } from './components/product/overview/overview.component';
import { ProductComponent } from './components/product/product.component';
import { SpecifictionComponent } from './components/product/specifiction/specifiction.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { UserImageComponent } from './components/users/user-image/user-image.component';
import { UserComponent } from './components/users/users.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PlaceholderDirective } from './directives/placeholder.directive';
import { EmployeeModule } from './employee/employee.module';
import { LoggerInterceptor } from './interceptors/logger.interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterPipe } from './pipes/filter.pipe';
import { NationalCodePipe } from './pipes/national-code.pipe';
import { DataService } from './services/data.service';
import { rootReducer } from '../app/store/root.reducer';



@NgModule({
  declarations: [
    AppComponent, UserComponent, UserImageComponent, UserDetailComponent,
    HighlightDirective,
    PlaceholderDirective,
    AlertComponent,
    PipeDemoComponent,
    NationalCodePipe,
    FilterPipe,
    ObservableDemoComponent,
    HeaderComponent,
    ProductComponent,
    OverviewComponent,
    SpecifictionComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule, FormsModule, LibUtilModule, HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    EmployeeModule,
    BrowserAnimationsModule,
    MatButtonModule, MatSliderModule, LayoutModule, MatToolbarModule,
    MatSidenavModule, MatIconModule, MatListModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot({rootReducer}),
    StoreDevtoolsModule.instrument({logOnly : true})
  ],
  providers: [DataService, {
    provide : HTTP_INTERCEPTORS,
    useClass : LoggerInterceptor,
    multi : true
  }],
  entryComponents :   [AlertComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
