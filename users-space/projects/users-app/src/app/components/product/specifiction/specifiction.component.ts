import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specifiction',
  templateUrl: './specifiction.component.html',
  styleUrls: ['./specifiction.component.css']
})
export class SpecifictionComponent implements OnInit {

  pageNumber : number;
  constructor(private route: ActivatedRoute) {
    // this.pageNumber = +this.route.snapshot.queryParams['page_no']
    this.route.queryParams.subscribe(params => {
      this.pageNumber = +params['page_no'];
    })
   }

  ngOnInit() {
  }

}
