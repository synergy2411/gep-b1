import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LibUtilModule } from 'gep-util';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { UserComponent } from './components/users/users.component';
import { UserImageComponent } from './components/users/user-image/user-image.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PlaceholderDirective } from './directives/placeholder.directive';
import { AlertComponent } from './components/alert/alert.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { NationalCodePipe } from './pipes/national-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { DataService } from './services/data.service';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { LoggerInterceptor } from './interceptors/logger.interceptor';
import { APP_ROUTES } from './app.routes';
import { HeaderComponent } from './components/header/header.component';

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
    HeaderComponent
  ],
  imports: [
    BrowserModule, FormsModule, LibUtilModule, HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
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
