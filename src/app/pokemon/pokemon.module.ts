import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListarComponent } from './pokemon-listar/pokemon-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PokemonListarComponent
  ],
  exports: [
    PokemonListarComponent
  ]
})
export class PokemonModule { }
