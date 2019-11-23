import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {
  items : Object = [
      {
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

  constructor() { }

  ngOnInit() {
    
  }

}
