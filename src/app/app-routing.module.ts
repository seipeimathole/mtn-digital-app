import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel/carousel.component';

const routes: Routes = [
  { path: '',   redirectTo: '', pathMatch: 'full' },
  { path: 'index', component: AppComponent },
  { path: 'carousel', component: CarouselComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
