export interface Pokemon {
    
    id: number;
    name: string;
    sprites: Sprite;
    height : string;
    weight : string;
    count : number;
    types : PokemonType[];
    abilities : PokemonAbility[];
    flavor_text_entries : PokemonSpecies[];
  }
export interface PokemonSpecies {
  slot : string;
  
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

export interface PokemonAbility {
  slot : string;
  ability : AbilityName;
}

export interface AbilityName {
  name : string;
}