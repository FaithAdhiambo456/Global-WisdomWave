import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicsRoutingModule } from './topics-routing.module';
import { PrayerComponent } from './prayer/prayer.component';
import { FaithComponent } from './faith/faith.component';
import { MercyComponent } from './mercy/mercy.component';
import { HolySpiritComponent } from './holy-spirit/holy-spirit.component';
import { KingdomOfGodComponent } from './kingdom-of-god/kingdom-of-god.component';
import { InheritanceComponent } from './inheritance/inheritance.component';
import { ChurchComponent } from './church/church.component';
import { FinancesComponent } from './finances/finances.component';
import { SalvationComponent } from './salvation/salvation.component';
import { ProphecyComponent } from './prophecy/prophecy.component';
import { FavourComponent } from './favour/favour.component';
import { EscatologyComponent } from './escatology/escatology.component';
import { SexualPurityComponent } from './sexual-purity/sexual-purity.component';


@NgModule({
  declarations: [
    PrayerComponent,
    FaithComponent,
    MercyComponent,
    HolySpiritComponent,
    KingdomOfGodComponent,
    InheritanceComponent,
    ChurchComponent,
    FinancesComponent,
    SalvationComponent,
    ProphecyComponent,
    FavourComponent,
    EscatologyComponent,
    SexualPurityComponent
  ],
  imports: [
    CommonModule,
    TopicsRoutingModule
  ]
})
export class TopicsModule { }
