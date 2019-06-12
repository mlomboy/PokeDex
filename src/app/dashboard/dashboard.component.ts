import { Component, OnInit } from '@angular/core';
import { Pokemon} from '../Pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pokemon: Pokemon[] = [];
  private _detailRegex = /^http:\/\/pokeapi.co\/api\/v2\/pokemon\/(\d+)\/$/;

  constructor(private pokemonService: PokemonService) { }
ngOnInit(){
  this.getPokemons();
}

getPokemons(): void {
  this.pokemonService.getPokemons()
    .subscribe( data => this.pokemon = data);
 }
}

