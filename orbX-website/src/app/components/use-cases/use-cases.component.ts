import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {ScrollSpyDirective} from "../../directives/scroll-spy.directive";
import {SECTIONS} from "../../../variables/sections";

@Component({
  selector: 'app-use-cases',
  standalone: true,
  imports: [
    NgForOf,
    ScrollSpyDirective
  ],
  templateUrl: './use-cases.component.html',
  styleUrl: './use-cases.component.scss'
})
export class UseCasesComponent {

  protected readonly SECTIONS = SECTIONS;
}
