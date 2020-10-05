import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillComponent } from './skill/skill.component';
import { JobComponent } from './job/job.component';
import { FacePartComponent } from './face-part/face-part.component';
import { FaceControlComponent } from './face-control/face-control.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SkillComponent,
    JobComponent,
    FacePartComponent,
    FaceControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
