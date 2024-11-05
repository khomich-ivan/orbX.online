import { Component } from '@angular/core';
import {SECTIONS} from "../../../variables/sections";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  protected readonly SECTIONS = SECTIONS;
  teamMembers: TeamMember[] = [
    {
      name: 'Yurii',
      position: 'Chief technology officer',
      photo: 'About_Photo_Yurii.png',
      description: 'The technical force behind our platform, with expertise in software and game development.'
    },
    {
      name: 'Roman',
      position: 'Chief executive officer',
      photo: 'About_Photo_Roman.png',
      description: 'Unites our creative and strategic directions, overseeing our 3D modeling and photogrammetry processes.'
    },
    {
      name: 'Ivan',
      position: 'Platform and operations manager',
      photo: 'About_Photo_Ivan.png',
      description: 'Ensures seamless platform integration, focusing on optimization and user experience for global audiences.'
    },
    // {
    //   name: 'Juliana',
    //   position: 'Art exhibition curator',
    //   photo: undefined,
    //   description: 'Ensures seamless platform integration, focusing on optimization and user experience for global audiences.'
    // }
  ];
}

interface TeamMember {
  name: string;
  position: string;
  photo: string | undefined;
  description: string;
}
