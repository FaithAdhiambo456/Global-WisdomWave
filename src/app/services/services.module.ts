import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { BookOrderComponent } from './book-order/book-order.component';

//Material imports
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    BookOrderComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,

    //Material modules
    MatTabsModule
    
  ]
})
export class ServicesModule { }
