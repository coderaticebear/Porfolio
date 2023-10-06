import {
  Component,
  ViewChild,
  ViewContainerRef,
  Renderer2,
} from '@angular/core';
import { ProjectDescComponent } from '../project-desc/project-desc.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  title: string = '';
  desc1: string = '';
  desc2: string = '';
  componentRef: any;
  currentIdentity: number = 0;
  @ViewChild('desc_container', { read: ViewContainerRef })
  desc_container!: ViewContainerRef;

  constructor(private renderer: Renderer2) {}

  generateDescription(identityType: number) {
    if (
      this.componentRef !== undefined &&
      identityType === this.currentIdentity
    ) {
      this.destroyDescription();
    } else {
      this.desc_container.clear();
      this.componentRef =
        this.desc_container.createComponent(ProjectDescComponent);
      this.renderer.addClass(
        this.componentRef.location.nativeElement,
        'fade-in'
      );
      this.currentIdentity = identityType;
    }
  }
  destroyDescription() {
    const element = this.componentRef.location.nativeElement;
    this.renderer.addClass(element, 'fade-out');
    element.addEventListener('animationend', () => {
      this.desc_container.clear();
      this.componentRef = undefined;
    });
  }
}
