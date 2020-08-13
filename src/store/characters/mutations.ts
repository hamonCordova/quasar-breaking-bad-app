import { CharactersState } from 'src/store/characters/state';
import Character from 'src/models/character';

export default {
  setCharacters(state: CharactersState, payload: Character[]) {
    state.charactersList = payload;
},
  setSelectedCharacter(state: CharactersState, payload: Character) {
    state.selectedCharacter = payload;
  }
}
