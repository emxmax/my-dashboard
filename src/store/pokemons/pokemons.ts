import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
    [key: string]: SimplePokemon;
}

const getInitialState = ():PokemonsState => {
  if (typeof localStorage === 'undefined') return {};
  const favorites = JSON.parse(localStorage.getItem('favorites-pokemons')?? '{}');
  return favorites;
}

const initialState: PokemonsState = {
  ...getInitialState(),
}

const PokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>){
        const pokemon = action.payload;
        const {id} = pokemon;

        if( !!state[id] ){
          delete state[id];
          //return;
        } else {
          state[id] = pokemon;
        }
        localStorage.setItem('favorites-pokemons', JSON.stringify(state));
    }
  }
});

export const {toggleFavorite} = PokemonsSlice.actions

export default PokemonsSlice.reducer