import { Component } from '@angular/core';

interface Book {
  name: string | null;
  author: string | null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstEvoApp';
  books: Book[] = [
    {
      name: 'Числа',
      author: 'Пелевин'
    },
    {
      name: 'Бездна',
      author: 'Андреев'
    }
  ]

  new_book = {
    name: null,
    author: null
  }

  newBook() {
    this.books.push({
      name: this.new_book.name,
      author: this.new_book.author,
    });
  }
}
