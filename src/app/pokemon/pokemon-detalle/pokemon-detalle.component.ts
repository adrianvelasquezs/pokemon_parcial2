import { ActivatedRoute } from '@angular/router';
import { PokemonService } from './../pokemon.service';
import { PokemonDetailDto } from './../pokemonDetailDto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-detalle',
  templateUrl: './pokemon-detalle.component.html',
  styleUrl: './pokemon-detalle.component.css'
})
export class PokemonDetalleComponent implements OnInit {

  pokeId!: string;
  @Input() pokeDetail!: PokemonDetailDto;

  constructor(
    route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  getPokemon() {
    this.pokemonService.getPokemon(this.pokeId)
  }

  ngOnInit(): void {
    if(this.pokeDetail === undefined){
      if(this.pokeId){
        this.getPokemon();
      }
    }
  }
}
