import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { AppsComponent } from "./apps/apps.component";
import { HomepageComponent } from "./homepage/homepage.component";

const secondaryRoutes: Routes = [
    { path: '',  component: HomepageComponent },
    { path: 'about',  component: AboutComponent },
    { path: 'apps',  component: AppsComponent }

];

@NgModule({
    imports: [
      RouterModule.forChild(secondaryRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
export class HomeRoutingModule {

}