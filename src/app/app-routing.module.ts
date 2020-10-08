import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VermasComponent } from './products/components/products/vermas/vermas.component';
import { HomeComponent } from './home/home.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { BuscadorComponent } from './home/components/buscador/buscador.component';

const routes: Routes = [
{path:"home",component:HomeComponent},
{path: "vermas", component:VermasComponent},
{path: "inicio-sesion", component:InicioSesionComponent},
{path:"search/:termino", component:BuscadorComponent},
{path:"**", pathMatch:"full", redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
