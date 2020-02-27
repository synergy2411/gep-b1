import { Component } from "@angular/core";

@Component({
  selector : "app-users",
  templateUrl : `./users.component.html`
})
export class UserComponent{

  user = {
    firstName : "Bill",
    lastName : "Gates",
    dob : new Date("Dec 21, 1965"),
    isWorking : true,
    income : 5000,
    company : "Microsoft",
    image : "assets/images/bill.jpg"
  }

}
