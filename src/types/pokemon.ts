export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    front_shiny: string;
    other: {
      'official-artwork': {
        front_default: string;
        front_shiny: string;
      };
    };
  };
  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
  abilities: Array<{
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }>;
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }>;
  moves: Array<{
    move: {
      name: string;
      url: string;
    };
  }>;
}

export interface PokemonSpeciesResponse {
  generation: {
    name: string;
    url: string;
  };
  flavor_text_entries: Array<{
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
  }>;
}

export interface TypeListResponse {
  count: number
  next: string
  previous: string| null
  results: TypePokemon[]
}

export interface TypePokemon {
  name: string
  url: string
}
