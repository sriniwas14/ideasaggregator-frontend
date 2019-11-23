import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loggedIn : Boolean = false;

  constructor(private http: HttpService){
  }

  ngOnInit() {
    if(this.http.getLoggedIn()==='true'){
      this.loggedIn = true
    }
  }

  title = 'ideasaggregator';
}
