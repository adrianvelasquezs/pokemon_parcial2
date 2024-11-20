import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListarComponent } from './pokemon-listar/pokemon-listar.component';
import { PokemonDetalleComponent } from './pokemon-detalle/pokemon-detalle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PokemonListarComponent,
    PokemonDetalleComponent
  ],
  exports: [
    PokemonListarComponent
  ]
})
export class PokemonModule { }
