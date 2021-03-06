import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {
  baseUrl = "https://typeahead-js-twitter-api-proxy.herokuapp.com/demo/search?q=";
  subject = new Subject();
  users: any[] = [];
  isLoading: boolean = false;
  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.subject.pipe(switchMap((text) => {
      this.isLoading = true;
      return this.onUserSearch(text)
    })).subscribe((users: any) => {
      this.isLoading = false;
      this.users = users;
    });
  }

  onUserSearch(searchTerm) {
    return this.http.get(`${this.baseUrl}${searchTerm}`);
  }

  onSuggestionSelected(selectedItem) {
    console.log(selectedItem);
  }
}
