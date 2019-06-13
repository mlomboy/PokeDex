import { Component, OnInit } from '@angular/core';
import { Pokemon, Sprite} from '../Pokemon';
import { PokemonService } from '../pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pokemon: Pokemon[] = [];
  pokemonSprite : Sprite;
  

  constructor(private pokemonService: PokemonService) { }
ngOnInit(){
  this.getPokemons();
}

getPokemons(): void {
  this.pokemonService.getPokemons()
    .subscribe( data => this.pokemon = data);
 }

}

