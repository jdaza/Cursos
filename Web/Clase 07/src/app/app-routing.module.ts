// Se encarga de mostrar las paginas y sus rutas que se van a mostrar en la aplicación
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importa el componente creado dentro del modulo home.
import { HomeComponent } from './home/home.component'
import { EstrenosComponent } from './estrenos/estrenos.component'

const routes: Routes = [
  {
    path: '',
    children: [],
    component: HomeComponent,
    component: EstrenosComponent
    //TODO: Revisar esto en el repositorio de Luis.
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
