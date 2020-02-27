import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, SimpleChanges } from "@angular/core";
import { IUser } from '../../model/user';
import { USER_DATA } from '../../model/mocks';

@Component({
  selector : "app-users",
  templateUrl : `./users.component.html`
})
export class UserComponent implements OnChanges,
 OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
 AfterViewChecked, OnDestroy{

  @Input("title") title : string;

  users : IUser[];

  onMoreInfo(user : IUser){
    alert(`Hello from ${user.firstName}, working with ${user.company}!`);
  }

  constructor(){

    // console.log("constructor")
  }
  ngOnChanges(changes : SimpleChanges){
    // console.log("ngOnChanges", changes);
    // this.title = "Custom Changes " +( Math.round(Math.random() * 10));
}
  ngOnInit(){
    this.users = USER_DATA;
    // console.log("ngOnInit");
  }
  ngDoCheck(){
    // console.log("ngDoCheck")
  }
  ngAfterContentInit(){
    // console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(){
    // console.log("ngAfterContentChecked")
  }
  ngAfterViewInit(){
    // console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(){
    // console.log("ngAfterViewChecked")
  }
  ngOnDestroy(){
    // console.log("ngOnDestroy")
  }

}
