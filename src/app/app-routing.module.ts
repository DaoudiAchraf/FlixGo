import { MyReservationsComponent } from './my-reservations/my-reservations.component';
import { MailComponent } from './mail/mail.component';
import { UserComponent } from './crudUser/crudUser.component';
import { ReserveComponent } from './reserve/reserve.component';

import { CurrentUserComponent } from './admin-dashboard/users/current-user/current-user.component';
import { PaymentsComponent } from './admin-dashboard/payments/payments.component';
import { UsersComponent } from './admin-dashboard/users/users.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MainComponent } from './Main/main/main.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { MessagesComponent } from './admin-dashboard/messages/messages.component';
import { Catalog1Component } from './catalog1/catalog1.component';
import { HeaderComponent } from './Main/header/header.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PricingComponent } from './pricing/pricing.component';
import { HelpComponent } from './help/help.component';
import { ReservationComponent } from './reservation/reservation.component';
import { MoviesComponent } from "./movies/movies.component";
import {AuthGuard, isAuthGuard, AdminGuard} from './sign-up/auth.guard';
import { EditReviewsComponent } from './edit-reviews/edit-reviews.component';
import { DeleteReviewComponent } from './delete-review/delete-review.component';

import {ProducerGuard} from './sign-up/auth.guard';
import { AnalyticsComponent } from './admin-dashboard/analytics/analytics.component';


 const routes: Routes = [
  {path: "", component: MainComponent , pathMatch: "full"},
  {path: "SignIn", component: SignInComponent,canActivate:[isAuthGuard]},
  {path: "SignUp", component: SignUpComponent,canActivate:[isAuthGuard]},
  {path: "NotFound", component: NotFoundComponent},
  {path: "About", component: AboutComponent},
  {path: "Catalog1", component: Catalog1Component },
  {path: "MovieDetails/:name", component: MovieDetailsComponent}, // when we click on a movie we get Details about that movie
  {path: "Pricing", component: PricingComponent},
  {path: "Help", component: HelpComponent},
  {path: "Contact", component: MailComponent},
  {path: "AdminDashboard/CrudUsers", component: UserComponent,canActivate:[AdminGuard]},
  {path: "AdminDashboard", component: AdminDashboardComponent,canActivate:[AdminGuard]},
  {path: "AdminDashboard/messages", component: MessagesComponent,canActivate:[AdminGuard]},
  {path: "AdminDashboard/users", component: UsersComponent,canActivate:[AdminGuard]},
  {path: "AdminDashboard/users/:id", component: CurrentUserComponent,canActivate:[AdminGuard]},
  {path: "AdminDashboard/payments", component: PaymentsComponent,canActivate:[AdminGuard]},
  {path: "reservation", component: ReservationComponent,canActivate:[ProducerGuard]},
  // {path: "reservation", component: ReservationComponent},
  {path: "reserve/:name", component: ReserveComponent,canActivate:[AuthGuard]},
  { path: "Movies", component: MoviesComponent, pathMatch: "prefix",canActivate:[ProducerGuard] },
  {path:"AdminDashboard/analytics",component:AnalyticsComponent,canActivate:[AdminGuard]},
  {path: "Comment/edit/:id", component: EditReviewsComponent},
  {path: "Comment/delete-review/:id", component: DeleteReviewComponent},
  {path: "myreservations", component: MyReservationsComponent},
  {path: "**", component: NotFoundComponent}



 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard,ProducerGuard,isAuthGuard,AdminGuard]
})
export class AppRoutingModule { }
