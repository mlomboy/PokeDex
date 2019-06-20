import { Component, OnInit } from '@angular/core';
import { Pokemon, Sprite} from '../Pokemon';
import { PokemonService } from '../pokemon.service';
import { Observable } from 'rxjs';
import { PagerService } from '../pager.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pokemon: Pokemon[] = [];
  pokemonSprite : Sprite;
  // pager: any = {};

  //   // paged items
  //   pagedItems: any[];

  constructor(private pokemonService: PokemonService,  private pagerService: PagerService) { }
ngOnInit(){
  this.getPokemons();
}

getPokemons(): void {
  this.pokemonService.getPokemons()
    .subscribe( data => {this.pokemon = data; 
      // this.setPage(1);
    });
 }
//  setPage(page: number) {
//   // get pager object from service
//   this.pager = this.pagerService.getPager(this.pokemon.length, page);

//   // get current page of items
//   this.pagedItems = this.pokemon.slice(this.pager.startIndex, this.pager.endIndex + 1);
// }

}

