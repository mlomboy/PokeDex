import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { Pokemon } from './Pokemon';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Response } from '@angular/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService ) { }

  private pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private pokeSpeciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/';

  private index : number;
  
  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokeUrl+'?offset=0&limit=20')
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Pokemon[]>('getPokemon', []))
      );  
  }



  getSprite(name : string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.pokeUrl+name);
  }
    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
      private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // TODO: better job of transforming error for user consumption
          this.log(`${operation} failed: ${error.message}`);
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
      private log(message: string) {
        this.messageService.add(`PokemonService: ${message}`);
      }

      searchPokemon(term: string): Observable<Pokemon[]> {
        if (!term) {
          // if not search term, return empty hero array.
          console.log('here');
          return of([]);
         }
        return this.http.get<Pokemon[]>(`${this.pokeUrl}${term}`).pipe(
          tap(_ => this.log(`found heroes matching "${term}"`)),
          catchError(this.handleError<Pokemon[]>('searchHeroes', []))
        );
      }

      getPokemon(name: string): Observable<Pokemon> {
        const url = `${this.pokeUrl}${name}`;
        return this.http.get<Pokemon>(url).pipe(
          tap(_ => this.log(`fetched hero id=${name}`)),
          catchError(this.handleError<Pokemon>(`getHero id=${name}`))
        );
      }

      getPokemonSpecies(name: string): Observable<Pokemon> {
        const url = `${this.pokeSpeciesUrl}${name}`;
        return this.http.get<Pokemon>(url).pipe(
          tap(_ => this.log(`fetched hero id=${name}`)),
          catchError(this.handleError<Pokemon>(`getHero id=${name}`))
        );
      }
}

