import { Component, OnInit } from '@angular/core';
import { Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  dataObs$ = Observable.create( observer => {
    setTimeout(() => {
      observer.next("First Package")
    }, 1000)
    setTimeout(() => {
      observer.next("Second Package")
    }, 2000)
    setTimeout(() => {
      observer.error(new Error("Something Bad happened!"))
      observer.next("Third Package")
    }, 4000)
    setTimeout(() => {
      observer.complete()
    }, 6000)
  })

  packages : any[] = [];

  unsub : Subscription;

  onSubscribe(){
    this.unsub =  this.dataObs$.subscribe(
      (response:any) =>  this.packages.push(response),
      err => console.log(err),
      () => console.log("Consumed")
    )
  }

  onUnsubscribe(){
    this.unsub.unsubscribe();
  }

  constructor() { }

  ngOnInit() {
  }

}
