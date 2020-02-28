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
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { NationalCodePipe } from './pipes/national-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent, UserComponent, UserImageComponent, UserDetailComponent,
    HighlightDirective,
    PlaceholderDirective,
    AlertComponent,
    PipeDemoComponent,
    NationalCodePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule, FormsModule, LibUtilModule
  ],
  providers: [DataService],
  entryComponents :   [AlertComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
