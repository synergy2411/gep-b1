import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  @Input("user") user : any;

  myCssClasses = {'my-border' : false, 'feature': false};

  onToggle(){
    this.myCssClasses['my-border'] = !this.myCssClasses['my-border']
    this.myCssClasses['feature'] = !this.myCssClasses['feature']
  }

}
