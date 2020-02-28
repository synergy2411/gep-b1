import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LibUtilModule } from 'gep-util';

import { AppComponent } from './app.component';
import { UserComponent } from './components/users/users.component';
import { UserImageComponent } from './components/users/user-image/user-image.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PlaceholderDirective } from './directives/placeholder.directive';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent, UserComponent, UserImageComponent, UserDetailComponent,
    HighlightDirective,
    PlaceholderDirective,
    AlertComponent
  ],
  imports: [
    BrowserModule, FormsModule, LibUtilModule
  ],
  providers: [],
  entryComponents :   [AlertComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
