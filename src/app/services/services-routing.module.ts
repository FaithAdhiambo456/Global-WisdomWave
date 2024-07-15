import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookOrderComponent } from './book-order/book-order.component';

const routes: Routes = [
  {path: 'book-order', component: BookOrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
