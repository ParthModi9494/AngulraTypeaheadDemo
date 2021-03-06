import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit {
  baseUrl = "https://typeahead-js-twitter-api-proxy.herokuapp.com/demo/search?q=";
  subject = new Subject();
  debounceTime: string = "500";
  isLoading: boolean = false;
  users: any[] = [];
  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.subject.pipe(debounceTime(Number(this.debounceTime))).subscribe((text) => {
      this.isLoading = true;
      this.onUserSearch(text).subscribe((users: any) => {
        this.isLoading = false;
        this.users = users;
      })
    })
  }

  onUserSearch(searchTerm) {
    return this.http.get(`${this.baseUrl}${searchTerm}`);
  }

  onDebounceChange() {
    this.subject = new Subject();
    this.ngOnInit();
  }

}
