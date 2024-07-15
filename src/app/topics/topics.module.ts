import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicsRoutingModule } from './topics-routing.module';
import { PrayerComponent } from './prayer/prayer.component';
import { FaithComponent } from './faith/faith.component';


@NgModule({
  declarations: [
    PrayerComponent,
    FaithComponent
  ],
  imports: [
    CommonModule,
    TopicsRoutingModule
  ]
})
export class TopicsModule { }
