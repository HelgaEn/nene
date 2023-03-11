import { Injectable } from '@angular/core';
//import { Component, OnInit } from '@angular/core';

export interface postdata{
  id: string;
  title: string,
  price: string,
  image: string,
  
}

@Injectable({
  providedIn: 'root'
})
export class GetpostdataService {

  

  constructor() { }

  
 
 
  post_inf: postdata[]=[];
  post_main: postdata[]=[];

  respon: any;
  getData = async ()=>{
    const response = await fetch('https://dummyjson.com/products');
//.then(res => res.json())
//.then(console.log);

    let context = await response.json();
    let key;
    
    for(key in context.products){
      //console.log(key+"for:"+context.products[key].title+context.products[key].price+context.products[key].thumbnail); //content.splice(0,3) -выведет три элемента массива

     let temp: postdata={
      id: '--',
      title: '--',
      price: '--',
      image:'--'
    };
    temp.id=context.products[key].id;
    temp.title=context.products[key].title;
     temp.price=context.products[key].price;
     temp.image=context.products[key].thumbnail;
     this.post_inf.push(temp); 
      }
     
      let key1;
      let i=0;
      for(key1 in this.post_inf){
      this.post_main.push(this.post_inf[i]);
      i++;
      }
      this.post_main.splice(10);//10ка для главной
      
     
    
} 

}
