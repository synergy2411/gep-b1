import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mocks';
import { IUser } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class DataService {
  counter : number = 0;

  constructor(private httpClient : HttpClient){}

  getApiData() : Observable<any>{
    return this.httpClient.get("./assets/user-data.json")
  }


  getUserData() : IUser[]{
    return USER_DATA;
  }
}
