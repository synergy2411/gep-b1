import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Output("onAlertClose") onAlertClose = new EventEmitter<any>();

  @Input("message") message : string;
  
  constructor() { }

  ngOnInit() {
  }

  onClose(){
    this.onAlertClose.emit(true);
  }

}
