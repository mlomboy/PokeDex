import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Sprite } from '../Pokemon';

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.css']
})
export class SpriteComponent implements OnInit {

  @Input ('pokeUrl') pokemonUrl : string;

  constructor(private pokemonService: PokemonService) { }
  pokemonSprite : Sprite;
  ngOnInit() {
    this.pokemonService.getSprite(this.pokemonUrl)
    .subscribe(data => {
      this.pokemonSprite = data.sprites;
      console.log(this.pokemonUrl)
    });
  }

}
