import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute, private location: Location, private router:Router) { }

  id: any;

  
   current: item={
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

    //console.log("item:"+context.title+context.price+context.thumbnail);
    
    this.current.title=context.title;
     this.current.price=context.price;
     this.current.image=context.thumbnail;
     this.current.description=context.description;
     this.current.rating=context.rating;
     this.current.brand=context.brand;
     
      }

      edit= async ()=>{
        /* updating title of product with id 1 */
        let response = await fetch('https://dummyjson.com/products/'+this.id, {
              method: 'PUT', /* or PATCH */
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                title: this.current.title,
                price: this.current.price,
                thumbnail: this.current.image,
                description: this.current.description,
                rating: this.current.rating,
                brand: this.current.brand
              })
            });
            //.then(res => res.json())
           // .then(console.log);//проверка работы тк запрос-симуляция и на предоставленном сервере данные не обновятся 

            if (response.ok) { // если HTTP-статус в диапазоне 200-299
              // получаем тело ответа
              //let json = await response.json();
              //console.log(json);
               this.router.navigateByUrl('/admin/items');
          } else {
              alert("Ошибка HTTP: " + response.status);
          }
      }



  ngOnInit(): void { 
    this.activatedroute.queryParams.subscribe(data=>{
      this.id= data['id']
    }
      );
    this.getData();

    
} 

}
