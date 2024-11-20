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
  typeCount: { [key: string]: number } = {};

  constructor(private pokemonService: PokemonService) { }

  getPokemons(): void {
    this.pokemons = this.pokemonService.getPokemons();
  }

  countPokemonTypes(): void {
    this.pokemons.forEach(pokemon => {
      pokemon.types.forEach(type => {
        if (this.typeCount[type.type.name]) {
          this.typeCount[type.type.name]++;
        } else {
          this.typeCount[type.type.name] = 1;
        }
      });
    });
  }

  onSelected(pokemon: PokemonDetailDto): void {
    this.selected = true;
    this.selectedPokemon = pokemon;
  }

  ngOnInit(): void {
    this.getPokemons();
    this.countPokemonTypes();
  }
}
