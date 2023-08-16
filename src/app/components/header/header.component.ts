import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() loadHomeComponent = new EventEmitter<void>();
  @Output() loadProjectsComponent = new EventEmitter<void>();
  @Output() loadStackComponent = new EventEmitter<void>();
  @Output() loadExperienceComponent = new EventEmitter<void>();
  @Output() loadEducationComponent = new EventEmitter<void>();
  @Output() loadDownloadsComponent = new EventEmitter<void>();
  @Output() loadContactComponent = new EventEmitter<void>();


  onHomeClick() {
    this.loadHomeComponent.emit();
  }
  onProjectsClick() {
    this.loadProjectsComponent.emit();
  }
  onStackClick() {
    this.loadStackComponent.emit();
  }
  onExperienceClick() {
    this.loadExperienceComponent.emit();
  }
  onEducationClick() {
    this.loadEducationComponent.emit();
  }
  onDownloadsClick() {
    this.loadDownloadsComponent.emit();
  }
  onContactClick() {
    this.loadContactComponent.emit();
  }
}
