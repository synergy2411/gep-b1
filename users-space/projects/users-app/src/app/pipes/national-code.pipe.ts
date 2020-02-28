import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name : "nationalcode"
})
export class NationalCodePipe implements PipeTransform{

  transform(value : any, ...args: any[]){
    switch (args[0]) {
      case "US":
        return "+1 " + value;
      case "EUR":
        return "+4 " + value;
      case "AUS":
        return "+21 " + value;
      default:
        return "+91 " + value;
    }

  }
}
