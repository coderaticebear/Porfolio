import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';



const routes: Routes = [
 {
  path: '',
  component: HomeComponent
 },
//  {
//   path: 'home',
//   component: HomeComponent
//  },
//  {
//   path: 'projects',
//   component: ProjectsComponent
//  },
//  {
//   path: 'stack',
//   component: StackComponent
//  },
//  {
//   path: 'experience',
//   component: ExperienceComponent
//  },
//  {
//   path: 'education',
//   component: EducationComponent
//  },
//  {
//   path: 'download',
//   component: DownloadsComponent
//  },
//  {
//   path: 'contact',
//   component: ContactComponent
//  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
