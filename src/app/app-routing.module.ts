import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobComponent } from './job/job.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'profile',
  },
  {
    path: '',
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'skill',
        component: SkillComponent
      },
      {
        path: 'job',
        component: JobComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
