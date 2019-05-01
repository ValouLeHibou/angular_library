import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // test: string = 'toto';
  books: any = null; //variable stockant les livres

  constructor(
    private booksService: BooksService //appel du service books
  ) { }

  ngOnInit() {
    // appel des variables
    //this.booksService.test();
    this.getBookList();
  }

  getBookList() {
    this.booksService.getList().subscribe((response: any) => {
      this.books = response;
    });
  }

  deleteBook(id) {
    this.booksService.delete(id).subscribe((response: any) => {
      console.log('Book ' + id + " deleted");
    }, (err: any) => {
      console.error(err);
    });
  }
}
