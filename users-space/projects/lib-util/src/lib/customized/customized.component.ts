import { Component, OnInit, Input, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'lib-customized',
  templateUrl: './customized.component.html',
  styleUrls: ['./customized.component.css']
})
export class CustomizedComponent implements OnInit, AfterViewInit {

  @Input("headerTempl") headerTempl : TemplateRef<any>;

  @ViewChild("defaultHeader", {static: false}) defaultHeader : TemplateRef<any>;

  constructor() { }

  ngOnInit() {
    console.log("INIT : ", this.defaultHeader);
  }

  ngAfterViewInit(){
    console.log("VIEW INIT : ", this.defaultHeader);
  }

}
