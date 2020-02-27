import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-user-image",
  templateUrl: "./user-image.component.html",
  styleUrls: ["./user-image.component.css"]
})
export class UserImageComponent {

  @Output("childEvent") childEvent = new EventEmitter<any>();
  @Input("xyz") usr: any;

  userInfo(usr: any) {
    this.childEvent.emit(usr);
  }
}
