import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  constructor() { }


  cars = ['Ford', 'Subaru', 'Toyota', 'KIA'];

  data(){
    return 'this is my data, man!';
  }

}
