import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { MyInfo } from "../../models/myInfo";
import { fullInfo as data } from "../../data/fullInfo";

@Component({
  selector: 'app-cv-page',
  templateUrl: './cv-page.component.html',
  styleUrls: ['./cv-page.component.scss']
})
export class CvPageComponent implements OnInit{
  constructor(private route: ActivatedRoute
  ) {
}

  fullInfo: MyInfo = data;
  pageLang: string = 'en'
  decorColor = '#7F9F04'

  public ngOnInit() {
    this.route.params.subscribe( (params:Params) => {
      if (params.lang) {
        this.pageLang = params.lang
      }
    })
  }
}
