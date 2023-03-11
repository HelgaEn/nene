import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


export interface item{

  title:string;
  price:string;
  description:string;
  rating:string;
  brand:string;
  image: string;

}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute, private location: Location) { }

  id: any;

  respon: any;
   temp: item={
    title: '--',
    price: '--',
    image:'--',
    description: '',
    rating: '',
    brand: ''
  };
  goBack(): void {
    this.location.back();
  }

  getData = async ()=>{
    const response = await fetch('https://dummyjson.com/products/'+this.id);

    let context = await response.json();

    console.log("item:"+context.title+context.price+context.thumbnail);
    
    this.temp.title=context.title;
     this.temp.price=context.price;
     this.temp.image=context.thumbnail;
     this.temp.description=context.description;
     this.temp.rating=context.rating;
     this.temp.brand=context.brand;
     
      }

  
  ngOnInit(): void { 
    this.activatedroute.queryParams.subscribe(data=>{
      this.id= data['id']
    }
      );
    this.getData();

    
} 
  }


