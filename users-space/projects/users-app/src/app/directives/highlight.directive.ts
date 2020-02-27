import { Directive, ElementRef, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
  selector : "[appHighlight]"
})
export class HighlightDirective{

  @HostBinding("style.background-color") bgColor : any;
  // @Input("myColor") myColor : string;

  @Input('appHighlight') set appHighlight(bool : boolean){
    if(bool){
      console.log("Success")
    }
  }


  @HostListener("mouseenter") onmouseenter(){
    this.bgColor = "grey";
  }
  @HostListener("mouseleave", ["$event"]) onmouseleave(event){
    this.bgColor = "transparent";
    // console.log(event.dataTransfer.files)
  }


  constructor(private elRef : ElementRef){
    // console.log(this.elRef.nativeElement);
    // this.elRef.nativeElement.style.backgroundColor = "lightgrey";
  }
}
