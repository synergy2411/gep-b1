import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.css"]
})
export class OverviewComponent implements OnInit {
  id: number;
  productName : string;

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.params);
    this.id = Number(this.route.snapshot.params["id"]);
    this.route.params.subscribe(params => {
      this.productName = params['name'];
    })
  }

  ngOnInit() {}
}
