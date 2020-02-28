import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mocks';
import { IUser } from '../model/user';

@Injectable()
export class DataService {

  getUserData() : IUser[]{
    return USER_DATA;
  }
}
