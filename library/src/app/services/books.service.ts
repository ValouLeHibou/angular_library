import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"; //import pour réaliser requête https

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private http: HttpClient
  ) { }

  test () {
    console.log('ok');
  }

  getList () {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getOne(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  create(data) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts/', data);
  }

  update(id, data) {
    return this.http.put('https://jsonplaceholder.typicode.com/posts/' + id, data);
  }

  delete(id) {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/' + id);
  }
}
