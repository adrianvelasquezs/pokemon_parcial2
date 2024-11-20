import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListarComponent } from './pokemon-listar/pokemon-listar.component';
import { PokemonDetalleComponent } from './pokemon-detalle/pokemon-detalle.component';

const routes: Routes = [
  { path: 'list', component: PokemonListarComponent },
  { path: ':id', component: PokemonDetalleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
