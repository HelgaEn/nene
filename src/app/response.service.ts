import { Injectable } from '@angular/core';
import { Resp } from './resp';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor() { }

  //let onData: object[];
  
   onData: Resp[]  = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
  ];

  
  
}
