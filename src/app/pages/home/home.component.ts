import { Component, ViewChild, ViewContainerRef, AfterViewInit, Renderer2  } from '@angular/core';
import { MainComponent } from 'src/app/components/main/main.component';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('container', { read: ViewContainerRef})
  container!: ViewContainerRef

  constructor( private renderer: Renderer2) {

  }
  createComponent(componentType: string) {
    let mainComponentRef
    let projectsComponentRef
    this.container.clear()
    if(componentType === 'home') {

      mainComponentRef = this.container.createComponent(MainComponent)
      this.renderer.addClass(mainComponentRef.location.nativeElement, 'fade-in');
    }
    if(componentType === 'Projects') {

      projectsComponentRef = this.container.createComponent(ProjectsComponent)
      this.renderer.addClass(projectsComponentRef.location.nativeElement, 'fade-in');
    }
  }
  ngAfterViewInit() {
    this.createComponent('home')
  }

}
