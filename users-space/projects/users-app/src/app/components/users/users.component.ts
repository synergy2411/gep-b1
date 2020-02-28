import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  SimpleChanges
} from "@angular/core";
import { IUser } from "../../model/user";
import { USER_DATA } from "../../model/mocks";

@Component({
  selector: "app-users",
  templateUrl: `./users.component.html`,
  styleUrls: ["./users.component.css"]
})
export class UserComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input("title") title: string;

  users: IUser[];

  onMoreInfo(user: IUser) {
    alert(`Hello from ${user.firstName}, working with ${user.company}!`);
  }

  constructor() {
    // console.log("constructor")
  }
  ngOnChanges(changes: SimpleChanges) {
    // console.log("[PARENT] ngOnChanges", changes);
    // this.title = "Custom Changes " +( Math.round(Math.random() * 10));
  }
  ngOnInit() {
    this.users = USER_DATA;
    // console.log("[PARENT] ngOnInit");
  }
  ngDoCheck() {
    // console.log("[PARENT] ngDoCheck");
  }
  ngAfterContentInit() {
    // console.log("[PARENT] ngAfterContentInit");
  }
  ngAfterContentChecked() {
    // console.log("[PARENT] ngAfterContentChecked");
  }
  ngAfterViewInit() {
    // console.log("[PARENT] ngAfterViewInit");
  }
  ngAfterViewChecked() {
    // console.log("[PARENT] ngAfterViewChecked");
  }
  ngOnDestroy() {
    // console.log("[PARENT] ngOnDestroy");
  }
}
