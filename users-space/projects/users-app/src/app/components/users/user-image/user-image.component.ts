import { Component, Input, Output, EventEmitter, SimpleChanges } from "@angular/core";

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


//   ngOnChanges(changes : SimpleChanges){
//     console.log("[CHILD] ngOnChanges");
//     // this.title = "Custom Changes " +( Math.round(Math.random() * 10));
// }
//   ngOnInit(){
//     console.log("[CHILD] ngOnInit");
//   }
//   ngDoCheck(){
//     console.log("[CHILD] ngDoCheck")
//   }
//   ngAfterContentInit(){
//     console.log("[CHILD] ngAfterContentInit")
//   }
//   ngAfterContentChecked(){
//     console.log("[CHILD] ngAfterContentChecked")
//   }
//   ngAfterViewInit(){
//     console.log("[CHILD] ngAfterViewInit")
//   }
//   ngAfterViewChecked(){
//     console.log("[CHILD] ngAfterViewChecked")
//   }
//   ngOnDestroy(){
//     console.log("[CHILD] ngOnDestroy")
//   }



}
