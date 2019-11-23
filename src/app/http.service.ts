import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private cookieService: CookieService) { }

  public getLoggedIn(){
    return this.cookieService.get("loggedIn");
  }

  public doLogin(){
    this.cookieService.set('loggedIn', "true")
    setTimeout(()=> {
      window.location.reload()
    }, 2000)
  }

  public logout(){
    this.cookieService.delete('loggedIn')
    window.location.reload()
  }
}
