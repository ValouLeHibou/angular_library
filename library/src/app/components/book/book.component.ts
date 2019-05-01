import { Component, OnInit } from '@angular/core';
import {BooksService} from "../../services/books.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  book: any = null;
  bookId: number = null;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.bookId = params['id'];
        this.getOneBook();
      }
    });
  }

  getOneBook() {
    this.booksService.getOne(this.bookId).subscribe((response: any) => {
      this.book = response;
      //console.log(this.book);
    })
  }

}
