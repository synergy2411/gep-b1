import { Component, ComponentFactoryResolver, ViewChild, ChangeDetectorRef, NgZone } from "@angular/core";
import { Subscription } from 'rxjs';
import { AlertComponent } from "./components/alert/alert.component";
import { PlaceholderDirective } from "./directives/placeholder.directive";
import { DataService } from './services/data.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "users-app";
  showAlert: boolean = false;
  counter : number;

  @ViewChild(PlaceholderDirective, { static: false })
             placeholderRef: PlaceholderDirective;

  constructor(private cmpFactory: ComponentFactoryResolver,
              public dataService : DataService,
              private router : Router,
              private store : Store<{counter : number}>,
              private sanitize : DomSanitizer,
              private cdRef : ChangeDetectorRef,
              private zone : NgZone) {
                // this.sanitize.
                this.zone.runOutsideAngular(() => {
                  // 
                })
              }

    ngOnInit(){
      this.store.subscribe(response => {
        console.log(response);
        this.counter = response['rootReducer'].counter;
      })
    }

    onIncrease(){
      this.store.dispatch({type : "INCREMENT"});
    }
    onDecrease(){
      this.store.dispatch({type : "DECREMENT"});
    }


  onCloseSub : Subscription;

  onNavigate(){
    this.router.navigate(['/pipe']);
  }


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
