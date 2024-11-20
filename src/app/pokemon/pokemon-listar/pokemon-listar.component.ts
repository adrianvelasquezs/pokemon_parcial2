import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonDetailDto } from '../pokemonDetailDto';

@Component({
  selector: 'app-pokemon-listar',
  templateUrl: './pokemon-listar.component.html',
  styleUrl: './pokemon-listar.component.css'
})

export class PokemonListarComponent implements OnInit {
  pokemons: PokemonDetailDto[] = [];

  constructor(private pokemonService: PokemonService) { }

  getPokemons(): void {
    this.pokemons = this.pokemonService.getPokemons();
  }

  ngOnInit(): void {
    this.getPokemons();
  }
}
