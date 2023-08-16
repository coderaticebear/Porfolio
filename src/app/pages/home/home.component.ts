import { Component, ViewChild, ViewContainerRef, AfterViewInit, Renderer2  } from '@angular/core';
import { MainComponent } from 'src/app/components/main/main.component';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';
import { StackComponent } from 'src/app/components/stack/stack.component';

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
    let componentRef
    this.container.clear()
    if(componentType === 'home') {

      componentRef = this.container.createComponent(MainComponent)
      this.renderer.addClass(componentRef.location.nativeElement, 'fade-in');
    }
    if(componentType === 'Projects') {

      componentRef = this.container.createComponent(ProjectsComponent)
      this.renderer.addClass(componentRef.location.nativeElement, 'fade-in');
    }
    if(componentType === 'Stack') {

      componentRef = this.container.createComponent(StackComponent)
      this.renderer.addClass(componentRef.location.nativeElement, 'fade-in');
    }
  }
  ngAfterViewInit() {
    this.createComponent('home')
  }

}
