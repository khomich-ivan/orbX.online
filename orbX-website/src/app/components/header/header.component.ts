import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  links = Links;
}

enum Links {
  HOME = 'home',
  ABOUT = 'about',
  CONTACT = 'contact',
}
