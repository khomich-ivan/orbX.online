import { Component } from '@angular/core';
import {ScrollSpyDirective} from "../../../../directives/scroll-spy.directive";
import {SECTIONS} from "../../../../../variables/sections";

@Component({
  selector: 'app-metaverse',
  standalone: true,
  imports: [
    ScrollSpyDirective
  ],
  templateUrl: './metaverse.component.html',
  styleUrl: './metaverse.component.scss'
})
export class MetaverseComponent {
  protected readonly SECTIONS = SECTIONS;
}
