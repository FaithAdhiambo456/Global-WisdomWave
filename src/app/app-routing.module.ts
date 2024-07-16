import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrayerComponent } from './topics/prayer/prayer.component';
import { BookOrderComponent } from './services/book-order/book-order.component';
import { SigninComponent } from './customers/signin/signin.component';
import { HomeComponent } from './dashboard/home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './dashboard/about/about.component';

const routes: Routes = [
   {
    path: '', redirectTo: '/topics', pathMatch: 'full'
  },
  {
    path: "topics",
    component: PrayerComponent,
    loadChildren: () =>
      import("./topics/topics.module").then((m) => m.TopicsModule),
  },
   {
    path: "services",
    component: BookOrderComponent,
    loadChildren: () =>
      import("./services/services.module").then((m) => m.ServicesModule),
  },
  {
    path: "customers",
    component: SigninComponent,
    loadChildren: () =>
      import("./customers/customers.module").then((m) => m.CustomersModule),
  },
  {
    path: "dashboard",
    component: HomeComponent,
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
   // { path: "", redirectTo: "/authentication/signin", pathMatch: "full" },
  {
    path: "authentication",
    //component: LoginComponent,
    loadChildren: () =>
      import("./authentication/authentication.module").then(
        (m) => m.AuthenticationModule
      ),
  },
  {path: 'footer', component: FooterComponent},
  {path: 'About', component: AboutComponent},

  { path: "**", component:  PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
