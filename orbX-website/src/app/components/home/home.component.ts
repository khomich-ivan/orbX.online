import { Component } from '@angular/core';
import {SECTIONS} from "../../../variables/sections";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  protected readonly SECTIONS = SECTIONS;
}
