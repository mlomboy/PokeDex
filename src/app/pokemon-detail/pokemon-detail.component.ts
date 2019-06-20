import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Pokemon, Sprite }         from '../Pokemon';
import { PokemonService }  from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  
  pokemon: Pokemon;
  pokemonSprite : Sprite;


  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPokemon();
    // this.getPokemonSpecies();
  }

  getPokemon(): void {
    const id = this.route.snapshot.paramMap.get('name');
    this.pokemonService.getPokemon(id)
      .subscribe(pokemon => this.pokemon = pokemon);
  }
  getPokemonSpecies(): void {
    const id = this.route.snapshot.paramMap.get('name');
    this.pokemonService.getPokemonSpecies(id)
      .subscribe(pokemon => this.pokemon = pokemon);
  }
  goBack(): void {
    this.location.back();
  }

}
