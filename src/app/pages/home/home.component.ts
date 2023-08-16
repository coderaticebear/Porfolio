import { Component, ViewChild, ViewContainerRef, AfterViewInit  } from '@angular/core';
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

  createComponent(componentType: string) {
    this.container.clear()
    if(componentType === 'home') {
      console.log('home')
      this.container.createComponent(MainComponent)
    }
    if(componentType === 'Projects') {
      console.log('projects')
      this.container.createComponent(ProjectsComponent)
    }
  }
  ngAfterViewInit() {
    this.createComponent('Projects')
  }

}
