import { Component } from '@angular/core';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'FirstEvoApp';

   randomInteger(min: number,max: number){
    let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
  }

  alert(type: number) {
    switch(type) {
      case 1:
        Notify.success('Повезло повезло')
        break;
      case 2:
        Notify.warning('Не повезло')
        break;
      case 3:
        Notify.failure('Одна ошибка- и ты ошибся')
        break;
      case 4:
        Notify.info('Попробовать ещё')
        break;
    }
  }

}
export class DemoButtonsBasicComponent {}