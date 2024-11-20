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
  selected: Boolean = false;
  selectedPokemon!: PokemonDetailDto;

  constructor(private pokemonService: PokemonService) { }

  getPokemons(): void {
    this.pokemons = this.pokemonService.getPokemons();
  }

  onSelected(pokemon: PokemonDetailDto): void {
    this.selected = true;
    this.selectedPokemon = pokemon;
  }

  ngOnInit(): void {
    this.getPokemons();
  }
}
