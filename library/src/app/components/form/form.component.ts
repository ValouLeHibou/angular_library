import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BooksService} from "../../services/books.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  bookId: number = null;
  book: any = null;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute
  ) { }

  bookSubmit: FormGroup = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  })

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
       this.bookId = params['id'];
        this.getBookInfo(this.bookId);
      }
    });
  }

  //
  getBookInfo (id) {
    this.booksService.getOne(this.bookId).subscribe((response: any) => {
      this.bookSubmit.setControl('title', new FormControl(response['title']));
      this.bookSubmit.setControl('body', new FormControl(response['body']));
    }, (err: any) => {
      console.error(err);
      });
  }

  onSubmit() {
    //console.log("Submit OK")
    if (this.bookId) {
      return this.booksService.update(this.bookId, this.bookSubmit.value).subscribe((response) => console.log(response));
    }
    return this.booksService.create(this.bookSubmit.value).subscribe( (response) => console.log(response));
  }

}
