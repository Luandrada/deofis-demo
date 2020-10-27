import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewMoreComponent } from './products/components/products/view-more/view-more.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './log-in/user/user-login/user-login.component';
import { BuscadorComponent } from './home/components/buscador/buscador.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { UserSignUpComponent } from './log-in/user/user-sign-up/user-sign-up.component';
import { Oauth2RedirectHandlerComponent } from './log-in/oauth2/oauth2-redirect-handler/oauth2-redirect-handler.component';
import { PruebaComponent } from './prueba/prueba/prueba.component';
import { AuthGuard } from './log-in/guards/auth.guard';
import { RoleGuard } from './log-in/guards/role.guard';

const routes: Routes = [
{path:"home",component:HomeComponent},
{path:"viewmore/:id", component:ViewMoreComponent},
{path:"userLogIn", component:UserLoginComponent},
{path:'oauth2/redirect', component: Oauth2RedirectHandlerComponent},
{path:"search/:termino", component:BuscadorComponent},
{path:"user-profile",component:UserProfileComponent},
{path:"user-sign-up",component:UserSignUpComponent},
{path:'test', component: PruebaComponent, canActivate: [AuthGuard, RoleGuard], data: {role: 'ROLE_ADMIN'}},
{path:"**", pathMatch:"full", redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
