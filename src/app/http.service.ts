import {
  Injectable
} from '@angular/core';
import {
  CookieService
} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private cookieService: CookieService) {}

  public getLoggedIn() {
    return this.cookieService.get("loggedIn");
  }

  public doLogin() {
    this.cookieService.set('loggedIn', "true")
    setTimeout(() => {
      window.location.reload()
    }, 2000)
  }

  public fetchIdeas(query) {
    let items = [{
        title: "Wohoo",
        description: "Wohoo some more",
        color: "red"
      },
      {
        title: "Niks",
        description: "Niks some more",
        color: "blue"
      },
      {
        title: "Iota",
        description: "Iota some more",
        color: "green"
      },
      {
        title: "Niks",
        description: "Niks some more",
        color: "blue"
      },
      {
        title: "Iota",
        description: "Iota some more",
        color: "green"
      },
      {
        title: "Niks",
        description: "Niks some more",
        color: "blue"
      },
      {
        title: "Iota",
        description: "Iota some more",
        color: "green"
      }
    ]

    let tempItems = []
    items.forEach(item => {
      if(item.title.search(query)!==-1){
        tempItems.push(item)
      }
    })

    return tempItems
  }

  public logout() {
    this.cookieService.delete('loggedIn')
    window.location.reload()
  }
}
