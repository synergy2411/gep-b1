import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent {

  filteredStatus : string = "";

  todos = [{
    label : "pot the plant",
    status : "done"
  },{
    label : "renew insurance",
    status : "pending"
  },{
    label : "read the books",
    status : "done"
  },{
    label : "buy the grocery",
    status : "pending"
  }]

  onAddNew(){
    this.todos.push({label : "New Todo Item" , status : "pending" });
  }

  contact_number : string = "987654321";

  promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve("Here the data comes")
    }, 3000);
  })

}
