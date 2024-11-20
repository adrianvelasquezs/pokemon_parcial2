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
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  getPokemon() {
    this.pokemonService.getPokemon(this.pokeId)
  }

  ngOnInit(): void {
    if(this.pokeDetail === undefined){
      this.pokeId = this.route.snapshot.paramMap.get('id')!
      if( this.pokeId ){
        this.getPokemon();
      }
    }
  }
}
