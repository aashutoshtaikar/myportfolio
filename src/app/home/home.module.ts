import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent } from './about/about.component';
import { AppsComponent } from './apps/apps.component';



@NgModule({
  declarations: [
    HomepageComponent,
    AboutComponent,
    AppsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
