import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {
  items = [];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.items = this.http.fetchIdeas("")
  }

  searchList(e){
    this.items = this.http.fetchIdeas(e)
  }

}
