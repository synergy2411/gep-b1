import { Component, ComponentFactoryResolver, ViewChild } from "@angular/core";
import { Subscription } from 'rxjs';
import { AlertComponent } from "./components/alert/alert.component";
import { PlaceholderDirective } from "./directives/placeholder.directive";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "users-app";
  showAlert: boolean = false;

  @ViewChild(PlaceholderDirective, { static: false })
             placeholderRef: PlaceholderDirective;

  constructor(private cmpFactory: ComponentFactoryResolver) {}

  onCloseSub : Subscription;

  onShowAlert() {
    const alertCmpResolver = this.cmpFactory.resolveComponentFactory(
      AlertComponent
    );

    const conatinerRef = this.placeholderRef.vcRef;

    conatinerRef.clear();

    const alertCmp = conatinerRef.createComponent(alertCmpResolver);

    alertCmp.instance.message = "My Awesome Component";

    this.onCloseSub = alertCmp.instance.onAlertClose.subscribe(() => {
      this.onCloseSub.unsubscribe();
      conatinerRef.clear();
    })

  }
}
