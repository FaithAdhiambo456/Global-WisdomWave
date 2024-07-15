import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaithComponent } from './faith/faith.component';
import { PrayerComponent } from './prayer/prayer.component';

const routes: Routes = [

  {path:'faith', component: FaithComponent},
  {path: 'prayer', component: PrayerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicsRoutingModule { }
