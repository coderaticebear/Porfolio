import { Component, Input } from '@angular/core';

export interface ProjectData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-project-desc',
  templateUrl: './project-desc.component.html',
  styleUrls: ['./project-desc.component.css'],
})
export class ProjectDescComponent {
  @Input() data: ProjectData = {
    title: '',
    description: '',
  };
}
