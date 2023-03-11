import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

export interface userdata{
  id: string,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  gender?: string,
  image: string,
  token?: string
  
}
 

@Injectable({
  providedIn: 'root'
})
export class GetuserdataService {

  constructor(private http:HttpClient ) { }

  arr: any=[];
 

  user_inf: userdata={
    id: '--',
    username: '*',
    email:'',
    firstName: '',
    lastName:'',
    image:''

  };
  resp: any;
  respon: any;

  
 
  getData = async (usernamed:string, passwordd: string) => {
    // Формируем запрос
    
    const response = await fetch('https://dummyjson.com/auth/login', {
      // Метод, если не указывать, будет использоваться GET
      method: 'POST',
     // Заголовок запроса
      headers: {
        'Content-Type': 'application/json'
      },
      // Данные
      body: JSON.stringify({
        username: usernamed,
        password: passwordd,
      })
    });
    //return response.json(); 
    this.arr.lenth=0;
    let context = await response.json();
    let key;

    for(key in context){
    //console.log(context[key]); //content.splice(0,3) -выведет три элемента массива
    //this.user_inf =response;
    this.arr.push(context[key])
    }
    console.log("array "+this.arr);
    this.user_inf.id=this.arr[0];
    this.user_inf.firstName=this.arr[3];
    this.user_inf.lastName=this.arr[4];
    this.user_inf.username=this.arr[1];
    this.user_inf.email=this.arr[2];
    this.user_inf.image=this.arr[6];
    this.user_inf.token=this.arr[7];
    
  };
 
 

  /*getData(usernamed:string, passwordd: string){
    fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: usernamed,
    password: passwordd,
  })
})
.then(res => res.json()) 
//.then(function(data){
  .then((data)=>{
  let userd =data;
  this.getFromData(userd);
}
);
  }

  getFromData(data:any){
    var arrayOfStrings = data.split('"');
    console.log("внутри функции"+arrayOfStrings);
    this.user_inf.id= arrayOfStrings[2].substring(1,2);
    this.user_inf.username=arrayOfStrings[5];
    this.user_inf.email=arrayOfStrings[9];
    this.user_inf.firstName=arrayOfStrings[13];
    this.user_inf.lastName=arrayOfStrings[17];
    this.user_inf.image=arrayOfStrings[25];
    console.log("внутри функции"+this.user_inf.id)
    
  }*/
  
  
}
