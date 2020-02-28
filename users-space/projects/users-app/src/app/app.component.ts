import { Component, ComponentFactoryResolver, ViewChild } from "@angular/core";
import { Subscription } from 'rxjs';
import { AlertComponent } from "./components/alert/alert.component";
import { PlaceholderDirective } from "./directives/placeholder.directive";
import { DataService } from './services/data.service';

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

  constructor(private cmpFactory: ComponentFactoryResolver,
              public dataService : DataService) {}

  onCloseSub : Subscription;

  increase(){
    this.dataService.counter++;
  }

  onShowAlert() {
    const alertCmpResolver = this.cmpFactory.resolveComponentFactory(
      AlertComponent
    );

    const containerRef = this.placeholderRef.vcRef;

    containerRef.clear();

    const alertCmp = containerRef.createComponent(alertCmpResolver);

    alertCmp.instance.message = "My Awesome Component";

    this.onCloseSub = alertCmp.instance.onAlertClose.subscribe(() => {
      this.onCloseSub.unsubscribe();
      containerRef.clear();
    })

  }
}
