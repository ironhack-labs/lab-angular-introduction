import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { ImagesAlbumComponent } from './images-album/images-album.component';
import { AcordionComponent } from './acordion/acordion.component';
import { MainComponent } from './main/main.component';
import { CommentComponent } from './comment/comment.component';
import { TeamsGroupComponent } from './teams-group/teams-group.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    ImagesAlbumComponent,
    AcordionComponent,
    MainComponent,
    CommentComponent,
    TeamsGroupComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
