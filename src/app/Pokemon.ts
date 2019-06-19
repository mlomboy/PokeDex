export interface Pokemon {
    
    id: number;
    name: string;
    sprites: Sprite;
    height : string;
    weight : string;
    types : PokemonType[];

  }

export interface Sprite {
  front_default : string;
}

export interface PokemonType {
  slot : string;
  type : TypeName;
}

export interface TypeName {
  name : string;
}

