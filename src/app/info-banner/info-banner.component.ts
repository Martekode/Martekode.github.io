import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-info-banner',
  templateUrl: './info-banner.component.html',
  styleUrls: ['./info-banner.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class InfoBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  longText ="this is some info about me";
  realName="Brian Desmedt";
  realEmail="martekobrian@hotmail.com";
  realHobbies=["drawing", "coding", "gaming", "creating small games", "readingbooks"];
  realPhone= "0478643605";

  


}
