import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './components/users/users.component';
import { UserImageComponent } from './components/users/user-image/user-image.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent, UserComponent, UserImageComponent, UserDetailComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
