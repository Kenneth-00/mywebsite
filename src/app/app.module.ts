import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PersonalProfileComponent } from './pages/personal-profile/personal-profile.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './pages/home/home.component';
import { MatDividerModule } from '@angular/material/divider';


const routes: Routes = [
  {
    path: "mywebsite", component: HomeComponent,
    children: [
      {path: "gallery", component: GalleryComponent},
      {path: "personal-profile", component: PersonalProfileComponent},
      {path: "contact", component: ContactComponent}
    ]
  },
  {path: "", redirectTo: "mywebsite", pathMatch: "full"}

]

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    PersonalProfileComponent,
    GalleryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes
    ),
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
