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
  useCasesCards: UseCaseCard[] = [
    { title: 'Digitalization of Exhibitions', imgName: 'usecase_icon_01.png', description: 'We transform exhibitions into engaging digital experiences by capturing the physical space and enhancing it with interactive, gamified elements.' },
    { title: 'Dynamic <br> Learning', imgName: 'usecase_icon_02.png', description: 'We turn complex school topics into engaging, interactive games developed with teachers to reinforce learning.' },
    { title: 'Metaverse of Education and Art', imgName: 'usecase_icon_03.png', description: 'We build a unified platform that hosts games and exhibitions in a centralized database, accessible across various devices.' }
  ];
}
interface UseCaseCard {
  title: string;
  imgName: string;
  description: string;
}
